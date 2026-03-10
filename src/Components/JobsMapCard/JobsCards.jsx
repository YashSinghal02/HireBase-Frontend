import './JobsCards.css'
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";

import Blinkit from '../../assets/Blinkit.png'
// import Zomato from '../../assets/Zomato.png'
// import Swiggy from '../../assets/Swiggy.png'
// import Amazon from '../../assets/Amazonlogo.png'
// import Facebook from '../../assets/Facebooklogo.png'
// import Google from '../../assets/Googlelogo.png'
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { api } from '@/Utils/axiosConfig';
import { apiTryCatch } from '@/Utils/trycatch';
import NoPageFound from "../../assets/NoPageFound.png"




function JobsCards({ jobs }) {

  return (
    <div className="jobCards-home-wrapper">

      { jobs.length >0? jobs.map((x)=>(
        <div className="jobCards-home" key={x._id}>

          <div className="jobCards-home-top">
           
            <span className="jobCards-home-date">Today</span>
            <span className='bookmark-circle'>
              <FaRegBookmark className="jobCards-home-bookmark"/>
            </span>
          </div>

          <div className="jobCards-home-company">
            <img 
              src={x.companyLogo ? x.companyLogo : Blinkit}
              alt="company"
              className="jobCards-home-logo"
            />

            <div>
              <h4>{x.companyName}</h4>
              <span>{x.location}</span>
            </div>
          </div>

          <h3 className="jobCards-home-title">{x.jobTitle}</h3>

          <p className="jobCards-home-desc">
            {x.description?.slice(0,120)}...
          </p>

          <div className="jobCards-home-tags">
            <span className="tag-blue">{x.positions} Positions</span>
            <span className="tag-orange">{x.jobType}</span>
            <span className="tag-purple">{x.salary} LPA</span>
          </div>

          <div className="jobCards-home-buttons">
            <button className="apply-btn">Apply</button>

            <Link to={`/dashboard/details/${x._id}`}>
              <button className="details-btn">Details</button>
            </Link>

          </div>

        </div>
      )): <img src={NoPageFound} alt="" style={{width:"350px"}}/>}

    </div>
  );
}

export default JobsCards
