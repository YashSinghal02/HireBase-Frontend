import React, { useRef } from 'react'
import { motion } from "framer-motion";
import hero_home from '../../assets/hero-home2.jpg';
import { IoSearch } from "react-icons/io5";


function Homehero({ jobs, setFilteredJobs }) {

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
    <div>
      <div className="home-hero">

        {/* TEXT SECTION */}
        <motion.div 
          className="home-hero-txt"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Find the Right Job, Whether You're{' '}
            <span className="highlight">Starting</span> or{' '}
            <span className="highlight">Ready to Grow</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Explore thousands of verified job opportunities tailored to your skills and experience. Take the next step toward a career that truly fits you.
          </motion.p>

          <motion.div 
            className="search-home"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className='search-home-icon'><IoSearch /></div>
            <input type="text" placeholder='Search Job title or keyword' id='search-bar-home'  ref={input} onChange={SearchItem}  />
            <motion.button 
              className='search-home-btn'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Search
            </motion.button>
          </motion.div>
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.div 
          className="home-hero-img"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <img src={hero_home} alt="" />
        </motion.div>

      </div>
    </div>
  )
}

export default Homehero