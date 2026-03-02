import React from "react";
import "./JobDetails.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaRegBookmark } from "react-icons/fa";
import Amazon from "../../assets/Amazonlogo.png"; 

function JobDetails() {
  const navigate = useNavigate();

  return (
    <div className="jobDetails-wrapper">
      <div className="jobDetails-card">

        {/* Top Section */}
        <div className="jobDetails-top">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <FaArrowLeft /> Back
          </button>

          <div className="save-circle">
            <FaRegBookmark />
          </div>
        </div>

        {/* Company Info */}
        <div className="jobDetails-company">
          <img src={Amazon} alt="company" />
          <div>
            <h2>Data Analyst</h2>
            <h4>Amazon</h4>
            <span>California, USA • Full Time</span>
          </div>
        </div>

        {/* Salary & Meta as Pills */}
        <div className="jobDetails-meta">
          <span className="meta-pill">💰 32 LPA</span>
          <span className="meta-pill">🕒 2-4 Years</span>
          <span className="meta-pill">📍 California</span>
        </div>

        {/* Job Description */}
        <div className="jobDetails-section">
          <h3>Job Description</h3>
          <p>
            Analyze business data to generate actionable insights and improve 
            decision-making processes. Work closely with cross-functional teams 
            to optimize performance metrics and reporting systems.
          </p>
        </div>

        {/* Responsibilities */}
        <div className="jobDetails-section">
          <h3>Responsibilities</h3>
          <ul className="responsibilities-list">
            <li>Collect, analyze, and interpret complex data sets</li>
            <li>Create dashboards and reports for stakeholders</li>
            <li>Collaborate with cross-functional teams to improve processes</li>
            <li>Monitor key performance indicators (KPIs) and metrics</li>
            <li>Provide actionable insights to support decision-making</li>
          </ul>
        </div>

        {/* Qualifications */}
        <div className="jobDetails-section">
          <h3>Qualifications</h3>
          <ul className="qualifications-list">
            <li>Bachelor’s degree in Data Science, Statistics, or related field</li>
            <li>2+ years of experience as a Data Analyst</li>
            <li>Proficiency in SQL, Python, and Excel</li>
            <li>Experience with BI tools (Power BI, Tableau)</li>
            <li>Strong analytical and problem-solving skills</li>
          </ul>
        </div>

        {/* Skills */}
        <div className="jobDetails-section">
          <h3>Skills</h3>
          <div className="skills-tags">
            <span>SQL</span>
            <span>Python</span>
            <span>Power BI</span>
            <span>Excel</span>
            <span>Data Visualization</span>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="jobDetails-buttons">
          <button className="save-btn">Save</button>
          <button className="apply-btn-main">Apply Now</button>
        </div>

      </div>
    </div>
  );
}

export default JobDetails;


// Map use Array
//   const responsibilities = [
//     "Collect, analyze, and interpret complex data sets",
//     "Create dashboards and reports for stakeholders",
//     "Collaborate with cross-functional teams to improve processes",
//     "Monitor key performance indicators (KPIs) and metrics",
//     "Provide actionable insights to support decision-making",
//   ];

//   const qualifications = [
//     "Bachelor’s degree in Data Science, Statistics, or related field",
//     "2+ years of experience as a Data Analyst",
//     "Proficiency in SQL, Python, and Excel",
//     "Experience with BI tools (Power BI, Tableau)",
//     "Strong analytical and problem-solving skills",
//   ];

//   const skills = ["SQL", "Python", "Power BI", "Excel", "Data Visualization"];

//   return (
//     <div className="jobDetails-wrapper">
//       <div className="jobDetails-card">

//         {/* Top Section */}
//         <div className="jobDetails-top">
//           <button className="back-btn" onClick={() => navigate(-1)}>
//             <FaArrowLeft /> Back
//           </button>

//           <div className="save-circle">
//             <FaRegBookmark />
//           </div>
//         </div>

//         {/* Company Info */}
//         <div className="jobDetails-company">
//           <img src={Amazon} alt="company" />
//           <div>
//             <h2>Data Analyst</h2>
//             <h4>Amazon</h4>
//             <span>California, USA • Full Time</span>
//           </div>
//         </div>

//         {/* Salary & Meta */}
//         <div className="jobDetails-meta">
//           <div>
//             <span className="meta-label">Salary</span>
//             <p>32 LPA</p>
//           </div>
//           <div>
//             <span className="meta-label">Experience</span>
//             <p>2-4 Years</p>
//           </div>
//           <div>
//             <span className="meta-label">Location</span>
//             <p>California</p>
//           </div>
//         </div>

//         {/* Job Description */}
//         <div className="jobDetails-section">
//           <h3>Job Description</h3>
//           <p>
//             Analyze business data to generate actionable insights and improve 
//             decision-making processes. Work closely with cross-functional teams 
//             to optimize performance metrics and reporting systems.
//           </p>
//         </div>

//         {/* Responsibilities */}
//         <div className="jobDetails-section">
//           <h3>Responsibilities</h3>
//           <ul className="responsibilities-list">
//             {responsibilities.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Qualifications */}
//         <div className="jobDetails-section">
//           <h3>Qualifications</h3>
//           <ul className="qualifications-list">
//             {qualifications.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Skills */}
//         <div className="jobDetails-section">
//           <h3>Skills</h3>
//           <div className="skills-tags">
//             {skills.map((skill, index) => (
//               <span key={index}>{skill}</span>
//             ))}
//           </div>
//         </div>

//         {/* Bottom Buttons */}
//         <div className="jobDetails-buttons">
//           <button className="save-btn">Save</button>
//           <button className="apply-btn-main">Apply Now</button>
//         </div>

//       </div>
//     </div>
//   );