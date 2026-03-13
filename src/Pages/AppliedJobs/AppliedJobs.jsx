import React, { useEffect, useState } from 'react';
import { api } from '@/Utils/axiosConfig';
import { apiTryCatch } from '@/Utils/trycatch';
import Blinkit from '../../assets/Blinkit.png';
import { FaRegBookmark } from "react-icons/fa6";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useNavigate } from "react-router-dom";

dayjs.extend(relativeTime);

function AppliedJobs() {
  const navigate = useNavigate();
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      await apiTryCatch(async () => {
        const res = await api.get("/jobs/applied");
        setAppliedJobs(res.data.data); // this is the populated AppliedJob array
      });
    };

    fetchAppliedJobs();
  }, []);

  if (appliedJobs.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h3>No applied jobs yet.</h3>
      </div>
    );
  }

  return (
    <div className="jobCards-home-wrapper">
      {appliedJobs.map((item) => {
        const job = item.job; // populated job object
        return (
          <div className="jobCards-home" key={item._id}>

            {/* Top section: posted date */}
            <div className="jobCards-home-top">
              <span className="jobCards-home-date">
                Posted: {dayjs(job.createdAt).fromNow()}
              </span>
              <span className="bookmark-circle">
                <FaRegBookmark className="jobCards-home-bookmark" />
              </span>
            </div>

            {/* Company section */}
            <div className="jobCards-home-company">
              <img
                src={job.logo ? job.logo : Blinkit}
                alt={job.companyName}
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
            <p className="jobCards-home-desc">{job.description?.slice(0, 120)}...</p>

            {/* Tags */}
            <div className="jobCards-home-tags">
              <span className="tag-blue">{job.positions} Positions</span>
              <span className="tag-orange">{job.jobType}</span>
              <span className="tag-purple">{job.salary} LPA</span>
            </div>

            {/* Applied Info */}
            <div className="jobCards-home-buttons">
              <button className="apply-btn" disabled>
                Applied
              </button>
              <button className="details-btn"
               onClick={() => navigate(`/dashboard/details/${job._id}`)}
              >
                Details
              </button>
            </div>

            {/* Applied Time */}
            <p style={{ fontSize: "12px", color: "#888", marginTop: "5px" }}>
              Applied: {dayjs(item.appliedAt).fromNow()}
            </p>

          </div>
        );
      })}
    </div>
  );
}

export default AppliedJobs;