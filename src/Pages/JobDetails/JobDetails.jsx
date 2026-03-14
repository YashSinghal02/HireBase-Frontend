import React, { useContext } from "react";
import "./JobDetails.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaRegBookmark } from "react-icons/fa";
import Amazon from "../../assets/Amazonlogo.png"; 
import { useState,useEffect } from 'react';
import { api } from '@/Utils/axiosConfig';
import { apiTryCatch } from '@/Utils/trycatch';
import { useParams } from "react-router-dom";
import { FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import toast from "react-hot-toast";
import { AuthContext } from '@/AuthContext/AuthContext';




function JobDetails() {
 const { role } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [data,setData] = useState(null);

  async function getJobs() {
    await apiTryCatch(async()=>{
      const response = await api.get(`/employer/jobs/${id}`);
      setData(response.data.data);
    })
  }
  console.log(data)

  useEffect(()=>{
    getJobs();
  },[id])

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

      {data && (

        <div className="jobDetails-card">

          <div className="jobDetails-top">
            <button className="back-btn" onClick={() => navigate(-1)}>
              <FaArrowLeft /> Back
            </button>
          </div>

          <div className="jobDetails-company">
            <img src={data.companyLogo ? data.companyLogo : Amazon}  alt="company" />
            <div>
              <h2>{data.jobTitle}</h2>
              <h4>{data.companyName}</h4>
              <span>{data.location} • {data.jobType}</span>
            </div>
          </div>

          <div className="jobDetails-meta">
            <span className="meta-pill"><RiMoneyRupeeCircleFill /> {data.salary} LPA</span>
            <span className="meta-pill"> <FaBriefcase /> {data.experienceLevel}</span>
            <span className="meta-pill"><FaMapMarkerAlt /> {data.location}</span>
          </div>

          {/* Job Description */}
        <div className="jobDetails-section">
          <h3>Job Description</h3>
          <p>
            {data.description}
          </p>
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
           {role==="employee" && (
              <button
                className="save-btn"
                onClick={() => handleApply(data._id)}
              >
                Save
              </button>
            )}
          {/* <button className="save-btn" onClick={() => handleSave(data._id)}>Save</button> */}
          {/* <button className="apply-btn-main" onClick={() => handleApply(data._id)}>Apply Now</button> */}
          {role==="employee" && (
              <button
                className="apply-btn-main"
                onClick={() => handleApply(data._id)}
              >
                Apply Now
              </button>
            )}
         </div>

        </div>

      )}

    </div>
  );
}

export default JobDetails;


