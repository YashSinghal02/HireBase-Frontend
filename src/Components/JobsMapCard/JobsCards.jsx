import "./JobsCards.css";
import { FaRegBookmark } from "react-icons/fa6";
import Blinkit from "../../assets/Blinkit.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { api } from "@/Utils/axiosConfig";
import { apiTryCatch } from "@/Utils/trycatch";
import NoPageFound from "../../assets/NoPageFound.png";
import toast from "react-hot-toast";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { AuthContext } from "@/AuthContext/AuthContext";

dayjs.extend(relativeTime);

function JobsCards({ jobs }) {
  const navigate = useNavigate();
  const { role, isAuthorized } = useContext(AuthContext);

  // Apply Job
  const handleApply = async (jobId) => {
    await apiTryCatch(async () => {
      const res = await api.post(`/jobs/${jobId}/apply/`);
      toast.success(res.data.message);
    });
  };

  // Save Job
  const handleSave = async (jobId) => {
    await apiTryCatch(async () => {
      const res = await api.post(`/savedjobs/${jobId}/save`);
      toast.success(res.data.message);
    });
  };

  if (!jobs.length) {
    return (
      <div className="jobCards-home-wrapper no-jobs">
        <img src={NoPageFound} alt="No Jobs Found" style={{ width: "350px" }} />
      </div>
    );
  }

  return (
    <div className="jobCards-home-wrapper">
      {jobs.map((job) => (
        <div className="jobCards-home" key={job._id}>
          {/* Top Row: Posted date & Save */}
          <div className="jobCards-home-top">
            <span className="jobCards-home-date">
              Posted: {dayjs(job.createdAt).fromNow()}
            </span>
            {/* <span className='bookmark-circle' onClick={() => handleSave(job._id)}>
              <FaRegBookmark className="jobCards-home-bookmark" />
            </span> */}

            {/* Show Save icon only for employee or guest */}
            {role !== "employer" && (
              <span
                className="bookmark-circle"
                onClick={() => {
                  if (isAuthorized && role === "employee") {
                    handleSave(job._id); // employee can save
                  } else {
                    navigate("/login"); // redirect guests to login
                  }
                }}
              >
                <FaRegBookmark className="jobCards-home-bookmark" />
              </span>
            )}
          </div>

          {/* Company Info */}
          <div className="jobCards-home-company">
            <img
              src={job.companyLogo || Blinkit}
              alt="company"
              className="jobCards-home-logo"
            />
            <div>
              <h4>{job.companyName}</h4>
              <span>{job.location}</span>
            </div>
          </div>

          {/* Job Title & Description */}
          <h3 className="jobCards-home-title">{job.jobTitle}</h3>
          <p className="jobCards-home-desc">
            {job.description?.slice(0, 200)}...
          </p>

          {/* Job Tags */}
          <div className="jobCards-home-tags">
            <span className="tag-blue">{job.positions} Positions</span>
            <span className="tag-orange">{job.jobType}</span>
            <span className="tag-purple">{job.salary
    ? job.salary.toUpperCase().includes("LPA")
      ? job.salary // user already wrote LPA
      : /^[0-9]+(\s*-\s*[0-9]+)?$/.test(job.salary.trim())
      ? `${job.salary} LPA` // append LPA if only numbers/range
      : job.salary // if any other text, keep as-is
    : "Not specified"}</span>
          </div>

          {/* Buttons */}
          <div className="jobCards-home-buttons">
            {/* Show Apply button only for employee or guest */}
            {role !== "employer" && (
              <button
                className="apply-btn"
                onClick={() => {
                  if (isAuthorized && role === "employee") {
                    handleApply(job._id); // employee can apply
                  } else {
                    navigate("/login"); // redirect guest to login
                  }
                }}
              >
                Apply
              </button>
            )}

            <Link to={`/dashboard/details/${job._id}`}>
              <button className="details-btn">Details</button>
            </Link>
          </div>

          {/* Only employees can see Apply */}
          {/* {role==="employer" && (
              <p style={{ fontSize: "12px", color: "#888", marginTop: "5px" }}>
                           Posted By: {job.postedBy.name}
                         </p>
            )} */}
          {role === "employer" && job.postedBy && (
            <p style={{ fontSize: "12px", color: "#888", marginTop: "5px" }}>
              Posted By: {job.postedBy.name || job.postedBy}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default JobsCards;
