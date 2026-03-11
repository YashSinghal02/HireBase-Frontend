import { useState,useEffect } from "react";
import "./EmployerJobCardCreated.css";
import { FaMapMarkerAlt, FaBriefcase, FaCalendarAlt, FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { apiTryCatch } from "@/Utils/trycatch";
import { api } from "@/Utils/axiosConfig";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import NoPageFound from "../../assets/NoPageFound.png"


function EmployerJobCardCreated({ jobs,deleteCard }) {



  return (
    <div className="job-item-card-wrapper">
      { jobs.length >0? jobs.map((x) => {
        let created = dayjs(x.createdAt).format("DD-MMM-YYYY");
        return(
        <div className="job-item-card" key={x._id}>

          <div className="job-item-header">
            <div>
              <h3 className="job-item-role">{x.jobTitle}</h3>
              <p className="job-item-company">{x.companyName}</p>
            </div>
            {/* <span className="job-item-level">{x.experienceLevel}</span> */}
          </div>

          <div className="job-item-meta">
            <div className="job-item-pill job-pill-location">
              <FaMapMarkerAlt />
              <span>{x.location}</span>
            </div>

           

            <div className="job-item-pill job-pill-date">
              <FaCalendarAlt />
              <span> {created}</span>
            </div>

            <div className="job-item-pill job-pill-experience">
              <FaBriefcase />
              <span>{x.experienceLevel}</span>
            </div>


          </div>

          <p className="job-item-description">
           {x.description}
          </p>

          <div className="job-item-actions">
            <Link to={`/dashboard/jobsedit/${x._id}`}>
  <button className="job-item-btn job-item-edit">
    <MdEdit />
  </button>
</Link>

            <button className="job-item-btn job-item-delete" onClick={() => deleteCard(x._id)}>
              <FaTrash />
            </button>
          </div>

        </div>
      )
      }
      ): <img src={NoPageFound} alt="" style={{width:"350px",margin:"auto"}}/>}
    </div>
  );
}

export default EmployerJobCardCreated;