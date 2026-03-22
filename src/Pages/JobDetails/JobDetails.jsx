import React, { useContext } from "react";
import "./JobDetails.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaRegBookmark } from "react-icons/fa";
import defaultlogo from "../../assets/defaultlogo.png";
import { useState, useEffect } from "react";
import { api } from "@/Utils/axiosConfig";
import { apiTryCatch } from "@/Utils/trycatch";
import { useParams } from "react-router-dom";
import { FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import toast from "react-hot-toast";
import { AuthContext } from "@/AuthContext/AuthContext";
import JobDetailsSkeleton from "./JobDetailsSkeleton";

function JobDetails() {
  const { role } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);

  // ✅ Loading states (already present)
  const [loading, setLoading] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(false);

  async function getJobs() {
    await apiTryCatch(async () => {
      const response = await api.get(`/employer/jobs/${id}`);
      setData(response.data.data);
    });
  }

  // ✅ Updated useEffect with skeleton logic
  useEffect(() => {
    let timer;

    const fetchJob = async () => {
      setLoading(true);

      timer = setTimeout(() => {
        setShowSkeleton(true);
      }, 300);

      await apiTryCatch(async () => {
        const response = await api.get(`/employer/jobs/${id}`);
        setData(response.data.data);
      });

      clearTimeout(timer);
      setLoading(false);
      setShowSkeleton(false);
    };

    fetchJob();

    return () => clearTimeout(timer);
  }, [id]);

  

  // Apply Jobs
  async function handleApply(jobId) {
    await apiTryCatch(async () => {
      const res = await api.post(`/jobs/${jobId}/apply/`);
      toast.success(res.data.message);
    });
  }

  // Save Jobs
  async function handleSave(jobId) {
    await apiTryCatch(async () => {
      const res = await api.post(`/savedjobs/${jobId}/save`);
      toast.success(res.data.message);
    });
  }

  return (
    <div className="jobDetails-wrapper">

      {/* ✅ LOADING / SKELETON */}
      {loading ? (
        showSkeleton ? (
          <div className="jobDetails-skeleton-wrapper">
            {Array(1)
              .fill(0)
              .map((_, i) => (
                <JobDetailsSkeleton key={i} />
              ))}
          </div>
        ) : (
          <div style={{ height: "200px" }} />
        )
      ) : (
        data && (
          <div className="jobDetails-card">
            <div className="jobDetails-top">
              <button className="back-btn" onClick={() => navigate(-1)}>
                <FaArrowLeft /> Back
              </button>
            </div>

            <div className="jobDetails-company">
              <img
                src={data.logo ? data.logo : defaultlogo}
                alt="company"
                className="jobCards-home-logo"
                onError={(e) => (e.target.src = defaultlogo)}
              />
              <div>
                <h2>{data.jobTitle}</h2>
                <h4>{data.companyName}</h4>
                <span>
                  {data.location} • {data.jobType}
                </span>
              </div>
            </div>

            <div className="jobDetails-meta">
              <span className="meta-pill">
                <RiMoneyRupeeCircleFill /> {data.salary} LPA
              </span>
              <span className="meta-pill">
                <FaBriefcase /> {data.experienceLevel}
              </span>
              <span className="meta-pill">
                <FaMapMarkerAlt /> {data.location}
              </span>
            </div>

            {/* Job Description */}
            <div className="jobDetails-section">
              <h3>Job Description</h3>
              <p>{data.description}</p>
            </div>

            {/* Responsibilities */}
            <div className="jobDetails-section">
              <h3>Responsibilities</h3>
              <ul className="responsibilities-list">
                {data.responsibilities?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Qualifications */}
            <div className="jobDetails-section">
              <h3>Qualifications</h3>
              <ul className="qualifications-list">
                {data.qualifications?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div className="jobDetails-section">
              <h3>Skills</h3>
              <div className="skills-tags">
                {data.skills?.map((skill, index) => (
                  <span key={index}>{skill}</span>
                ))}
              </div>
            </div>

            {/* Bottom Buttons */}
            <div className="jobDetails-buttons">
              {role === "employee" && (
                <button
                  className="save-btn"
                  onClick={() => handleSave(data._id)}
                >
                  Save
                </button>
              )}

              {role === "employee" && (
                <button
                  className="apply-btn-main"
                  onClick={() => handleApply(data._id)}
                >
                  Apply Now
                </button>
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default JobDetails;