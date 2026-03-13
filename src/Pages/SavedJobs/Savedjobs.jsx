import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "@/Utils/axiosConfig";
import { apiTryCatch } from "@/Utils/trycatch";
import Blinkit from "../../assets/Blinkit.png";
import { FaRegBookmark } from "react-icons/fa6";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
// import "./JobsCards.css";

dayjs.extend(relativeTime);

function SavedJobs() {
  const [savedJobs, setSavedJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSavedJobs = async () => {
      await apiTryCatch(async () => {
        const res = await api.get("/savedjobs/saved");
        // filter out deleted jobs
        const validJobs = (res.data.data || []).filter(
          (item) => item.job !== null,
        );
        setSavedJobs(validJobs);
      });
    };
    fetchSavedJobs();
  }, []);

  if (savedJobs.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h3>No saved jobs yet.</h3>
      </div>
    );
  }

  return (
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
                src={job.logo || Blinkit}
                alt={job.companyName || "Company"}
                className="jobCards-home-logo"
              />
              <div>
                <h4>{job.companyName}</h4>
                <span>{job.location}</span>
              </div>
            </div>

            {/* Job Title */}
            <h3 className="jobCards-home-title">{job.jobTitle}</h3>

            {/* Job Description */}
            <p className="jobCards-home-desc">
              {job.description?.slice(0, 120)}...
            </p>

            {/* Tags */}
            <div className="jobCards-home-tags">
              <span className="tag-blue">{job.positions} Positions</span>
              <span className="tag-orange">{job.jobType}</span>
              <span className="tag-purple">{job.salary} LPA</span>
            </div>

            {/* Buttons */}
            <div className="jobCards-home-buttons">
              <button className="apply-btn" disabled>
                Saved
              </button>
              <button
                className="details-btn"
                onClick={() => navigate(`/dashboard/details/${job._id}`)}
              >
                Details
              </button>
            </div>

            {/* Saved Time */}
            <p style={{ fontSize: "12px", color: "#888", marginTop: "5px" }}>
              Saved: {dayjs(item.savedAt).fromNow()}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default SavedJobs;
