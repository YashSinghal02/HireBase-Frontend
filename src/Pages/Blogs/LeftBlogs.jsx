import React from "react";
import "./LeftBlogs.css";
import { FaCalendarAlt, FaComment } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import DiscussionSection from "./DiscussionSection";
import blog1 from '../../assets/blog1.avif';
import blog2 from '../../assets/blog2.avif';
import blog3 from '../../assets/blog3.avif';
import blog4 from '../../assets/blog4.avif';
import { motion } from "framer-motion";

function LeftBlogs() {
  const blogs = [
    {
      id: 1,
      title: "5 Hiring Metrics Every Recruiter Should Track in 2026",
      img: blog2,
      date: "02 March 2026",
      comments: "12 Comments",
      author: "HireBase Team",
    },
    {
      id: 2,
      title: "How AI Is Transforming Talent Acquisition Workflows",
      img: blog1,
      date: "04 March 2026",
      comments: "8 Comments",
      author: "HireBase Editorial",
    },
    {
      id: 3,
      title: "Building a Strong Employer Brand in a Competitive Market",
      img: blog3,
      date: "05 March 2026",
      comments: "15 Comments",
      author: "HireBase Insights",
    },
    {
      id: 4,
      title: "Remote Hiring: Best Practices for Distributed Teams",
      img: blog4,
      date: "08 April 2026",
      comments: "6 Comments",
      author: "HireBase Research",
    },
  ];

  // Framer Motion variants for staggered appearance
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <motion.div
        className="left-blogs-wrapper"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {blogs.map((blog) => (
          <motion.div className="left-blogs-card" key={blog.id} variants={item}>
            
            <div className="left-blogs-image-wrapper">
              <img src={blog.img} alt={blog.title} />
              <span className="left-blogs-date">
                <FaCalendarAlt /> {blog.date}
              </span>
            </div>

            <div className="left-blogs-content">
              <p className="left-blogs-meta">
                <FaComment /> {blog.comments} • {blog.author}
              </p>

              <h3 className="left-blogs-title">{blog.title}</h3>

              <button className="left-blogs-btn">
                Read Article <FiArrowRight />
              </button>
            </div>

          </motion.div>
        ))}
      </motion.div>

      {/* DiscussionSection */}
      <DiscussionSection />
    </div>
  );
}

export default LeftBlogs;