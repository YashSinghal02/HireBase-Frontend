import React from "react";
import "./RightBlogs.css";
import { FaCalendarAlt, FaComment } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FaRegComments } from "react-icons/fa";
import { FaComments } from "react-icons/fa6";
import rightblog1 from '../../assets/rightblog1.avif'
import rightblog2 from '../../assets/rightblog2.avif'
import rightblog3 from '../../assets/rightblog3.jpg'
import { motion } from "framer-motion";

function RightBlogs() {
  return (
    <motion.div className="right-blogs-wrapper"
    initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
    >

      {/* Search */}
      <div className="right-blogs-sidebar-box">
        <div className="right-blogs-search">
          <FiSearch className="right-blogs-search-icon" />
          <input
            type="text"
            placeholder="Search articles..."
            className="right-blogs-search-input"
          />
          <button className="right-blogs-search-btn">Search</button>
        </div>
      </div>

      {/* Categories */}
      <div className="right-blogs-sidebar-box">
        <h4 className="right-blogs-heading">Categories</h4>

        <div className="right-blogs-category-list">

          <div className="right-blogs-category-item">
            <span>› Hiring Strategy</span>
            <span className="right-blogs-category-count">6</span>
          </div>

          <div className="right-blogs-category-item">
            <span>› Talent Acquisition</span>
            <span className="right-blogs-category-count">4</span>
          </div>

          <div className="right-blogs-category-item">
            <span>› Employer Branding</span>
            <span className="right-blogs-category-count">3</span>
          </div>

          <div className="right-blogs-category-item">
            <span>› Remote Hiring</span>
            <span className="right-blogs-category-count">2</span>
          </div>

          <div className="right-blogs-category-item">
            <span>› Career Growth</span>
            <span className="right-blogs-category-count">5</span>
          </div>

        </div>
      </div>

      {/* Recent Posts */}
      <div className="right-blogs-sidebar-box">
        <h4 className="right-blogs-heading">Recent Articles</h4>

        <div className="right-blogs-recent-item">
          <img src={rightblog1} alt="" />
          <div>
            <h5>How AI is transforming candidate screening</h5>
            <div className="right-blogs-recent-meta">
              <span className="right-blog-icons-flx"><FaCalendarAlt /> Jan 12, 2026</span>
              <span className="right-blog-icons-flx"><FaComments   /> 24k</span>
            </div>
          </div>
        </div>

        <div className="right-blogs-recent-item">
          <img src={rightblog2}  alt="" />
          <div>
            <h5>Building a strong employer brand in 2026</h5>
            <div className="right-blogs-recent-meta">
              <span className="right-blog-icons-flx"><FaCalendarAlt /> Feb 2, 2026</span>
              <span className="right-blog-icons-flx"><FaComments /> 14k</span>
            </div>
          </div>
        </div>

        <div className="right-blogs-recent-item">
          <img src={rightblog3}  alt="" />
          <div>
            <h5>5 hiring metrics every recruiter must track</h5>
            <div className="right-blogs-recent-meta">
              <span className="right-blog-icons-flx"><FaCalendarAlt /> Mar 5, 2026</span>
              <span className="right-blog-icons-flx"><FaComments /> 1k</span>
            </div>
          </div>
        </div>

      </div>

      {/* Tags */}
      <div className="right-blogs-sidebar-box">
        <h4 className="right-blogs-heading">Tags</h4>

        <div className="right-blogs-tags">
          <span>Recruitment</span>
          <span>HR Tech</span>
          <span>Startup Hiring</span>
          <span>Leadership</span>
          <span>Work Culture</span>
        </div>
      </div>

    </motion.div>
  );
}

export default RightBlogs;