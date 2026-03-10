import React, { useRef } from 'react'
import './HeroJob.css'
import { IoSearch } from "react-icons/io5";
import { motion } from "framer-motion";


function HeroJob({ jobs, setFilteredJobs }) {

  
const input = useRef();

  function SearchItem() {

    const userInput = input.current.value.toLowerCase();

    const result = jobs.filter((job) =>
     job.jobTitle?.toLowerCase().includes(userInput) ||
  job.companyName?.toLowerCase().includes(userInput) ||
  job.location?.toLowerCase().includes(userInput) ||
  job.description?.toLowerCase().includes(userInput) ||
  job.jobType?.toLowerCase().includes(userInput)
    
    );

    setFilteredJobs(result);
  }
  return (
    <div className="jobs-wrapper">
      <motion.div
        className="jobs-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >

        {/* Heading & Paragraph */}
        <motion.div
          className="jobs-dashboard-txt"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Find the Right Job, Whether You're <span>Starting</span> or <span>Ready to Grow</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore thousands of verified job opportunities tailored to your skills and experience. Take the next step toward a career that truly fits you.
          </motion.p>
        </motion.div>

        {/* Search */}
        <motion.div
          className="search-home"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="search-home-icon">
            <IoSearch />
          </div>
          <input
            type="text"
            placeholder="Search job title or keyword"
            className="search-bar-home"  ref={input} onChange={SearchItem} 
          />
          <button className="search-home-btn">Search</button>
        </motion.div>

      </motion.div>
    </div>
  )
}

export default HeroJob;