import React, { useEffect, useState } from "react";
import { api } from "@/Utils/axiosConfig";
import { apiTryCatch } from "@/Utils/trycatch";
import defaultlogo from "../../assets/defaultlogo.png";
import { FaRegBookmark } from "react-icons/fa6";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useNavigate } from "react-router-dom";
import JobCardSkeleton from "@/Components/JobsMapCard/JobCardSkeleton";

dayjs.extend(relativeTime);

function AppliedJobs() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [showSkeleton, setShowSkeleton] = useState(false);

useEffect(() => {
  let timer;

  const fetchAppliedJobs = async () => {
    setLoading(true);

    timer = setTimeout(() => {
      setShowSkeleton(true);
    }, 300);

    await apiTryCatch(async () => {
      const res = await api.get("/jobs/applied");
      setAppliedJobs(res.data.data);
    });

    clearTimeout(timer);
    setLoading(false);
    setShowSkeleton(false);
  };

  fetchAppliedJobs();

  return () => clearTimeout(timer); // ✅ important
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
      ) : appliedJobs.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h3>No applied jobs yet.</h3>
        </div>
      ) : (
        <div className="jobCards-home-wrapper">
          {appliedJobs.map((item) => {
            const job = item.job;

            return (
              <div className="jobCards-home" key={item._id}>
                {/* Top */}
                <div className="jobCards-home-top">
                  <span className="jobCards-home-date">
                    Posted: {dayjs(job.createdAt).fromNow()}
                  </span>
                  <span className="bookmark-circle">
                    <FaRegBookmark />
                  </span>
                </div>

                {/* Company */}
                <div className="jobCards-home-company">
                  <img
                    src={job.logo ? job.logo : defaultlogo}
                    alt={job.companyName}
                    className="jobCards-home-logo"
                    onError={(e) => (e.target.src = defaultlogo)}
                  />
                  <div>
                    <h4>{job.companyName}</h4>
                    <span>{job.location}</span>
                  </div>
                </div>

                {/* Title */}
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
                        ? job.salary.toUpperCase() // 🔥 fix here
                        : /^[0-9]+(\s*-\s*[0-9]+)?$/.test(job.salary.trim())
                          ? `${job.salary} LPA`
                          : job.salary
                      : "Not specified"}{" "}
                  </span>
                </div>

                {/* Buttons */}
                <div className="jobCards-home-buttons">
                  <button className="apply-btn" disabled>
                    Applied
                  </button>
                  <button
                    className="details-btn"
                    onClick={() => navigate(`/dashboard/details/${job._id}`)}
                  >
                    Details
                  </button>
                </div>

                {/* Applied Time */}
                <p
                  style={{ fontSize: "12px", color: "#888", marginTop: "5px" }}
                >
                  Applied: {dayjs(item.appliedAt).fromNow()}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default AppliedJobs;
