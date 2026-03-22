import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "@/Utils/axiosConfig";
import { apiTryCatch } from "@/Utils/trycatch";
import defaultlogo from "../../assets/defaultlogo.png";
import { FaRegBookmark } from "react-icons/fa6";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import JobCardSkeleton from "@/Components/JobsMapCard/JobCardSkeleton";

// import "./JobsCards.css";

dayjs.extend(relativeTime);

function SavedJobs() {
   const navigate = useNavigate();
  const [savedJobs, setSavedJobs] = useState([]);
const [loading, setLoading] = useState(true);
const [showSkeleton, setShowSkeleton] = useState(false);

useEffect(() => {
  let timer;

  const fetchSavedJobs = async () => {
    setLoading(true);

    // ⏱ start delay timer
    timer = setTimeout(() => {
      setShowSkeleton(true);
    }, 300); // show only if slow

    await apiTryCatch(async () => {
      const res = await api.get("/savedjobs/saved");

      const validJobs = (res.data.data || []).filter(
        (item) => item.job !== null
      );

      setSavedJobs(validJobs);
    });

    clearTimeout(timer); // stop timer if fast
    setLoading(false);
    setShowSkeleton(false); // reset
  };

  fetchSavedJobs();

  return () => clearTimeout(timer);
}, []);

return (
  <div>
    {loading ? (
      showSkeleton ? (
        // ✅ Show skeleton only if loading is slow
        <div className="jobCards-home-wrapper">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <JobCardSkeleton key={i} />
            ))}
        </div>
      ) : (
        // ✅ Prevent layout jump (no blank flash)
        <div style={{ height: "200px" }} />
      )
    ) : savedJobs.length === 0 ? (
      // ✅ No data state
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h3>No saved jobs yet.</h3>
      </div>
    ) : (
      // ✅ Real data
      <div className="jobCards-home-wrapper">
        {savedJobs.map((item) => {
          const job = item.job;

          return (
            <div className="jobCards-home" key={item._id}>
              {/* Top section */}
              <div className="jobCards-home-top">
                <span className="jobCards-home-date">
                  Posted: {dayjs(job.createdAt).fromNow()}
                </span>
                <span className="bookmark-circle">
                  <FaRegBookmark className="jobCards-home-bookmark" />
                </span>
              </div>

              {/* Company Info */}
              <div className="jobCards-home-company">
                <img
                  src={job.logo || defaultlogo}
                  alt={job.companyName || "Company"}
                  className="jobCards-home-logo"
                  onError={(e) => (e.target.src = defaultlogo)}
                />
                <div>
                  <h4>{job.companyName}</h4>
                  <span>{job.location}</span>
                </div>
              </div>

              {/* Job Title */}
              <h3 className="jobCards-home-title">{job.jobTitle}</h3>

              {/* Description */}
              <p className="jobCards-home-desc">
                {job.description?.slice(0, 120)}...
              </p>

              {/* Tags */}
              <div className="jobCards-home-tags">
                <span className="tag-blue">{job.positions} Positions</span>
                <span className="tag-orange">{job.jobType}</span>
                <span className="tag-purple">
                  {job.salary
                    ? job.salary.toUpperCase().includes("LPA")
                      ? job.salary.toUpperCase()
                      : /^[0-9]+(\s*-\s*[0-9]+)?$/.test(job.salary.trim())
                      ? `${job.salary} LPA`
                      : job.salary
                    : "Not specified"}
                </span>
              </div>

              {/* Buttons */}
              <div className="jobCards-home-buttons">
                <button className="apply-btn" disabled>
                  Saved
                </button>
                <button
                  className="details-btn"
                  onClick={() =>
                    navigate(`/dashboard/details/${job._id}`)
                  }
                >
                  Details
                </button>
              </div>

              {/* Saved Time */}
              <p
                style={{
                  fontSize: "12px",
                  color: "#888",
                  marginTop: "5px",
                }}
              >
                Saved: {dayjs(item.savedAt).fromNow()}
              </p>
            </div>
          );
        })}
      </div>
    )}
  </div>
);
}

export default SavedJobs;
