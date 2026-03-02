import React from "react";
import "./DiscussionSection.css";
import { FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";

function DiscussionSection() {
  return (
    <motion.div className="discussion-section-wrapper"
    initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
    >

      <h2 className="discussion-section-title">
        Discussion
      </h2>

      {/* Comment 1 */}
      <div className="discussion-section-comment">

        <div className="discussion-section-avatar">
          <FaUserCircle />
        </div>

        <div className="discussion-section-content">
          <div className="discussion-section-header">
            <h4>Rahul Mehta</h4>
            <span>March 10, 2026</span>
          </div>

          <p>
            This article on hiring metrics was extremely helpful. We recently
            started tracking time-to-hire and candidate quality score at our startup,
            and the improvement has been noticeable.
          </p>

          <button className="discussion-section-reply-btn">
            Reply
          </button>
        </div>
      </div>

      {/* Reply */}
      <div className="discussion-section-reply">

        <div className="discussion-section-avatar">
          <FaUserCircle />
        </div>

        <div className="discussion-section-content">
          <div className="discussion-section-header">
            <h4>HireBase Team</h4>
            <span>March 11, 2026</span>
          </div>

          <p>
            Glad you found it useful, Rahul! Tracking structured hiring data
            is one of the biggest advantages modern teams can have.
          </p>
        </div>
      </div>

      {/* Leave Comment Form */}
      <div className="discussion-section-form-wrapper">
        <h3>Leave a Comment</h3>

        <form className="discussion-section-form">

          <div className="discussion-section-form-row">
            <input
              type="text"
              placeholder="Your Name"
              className="discussion-section-input"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="discussion-section-input"
              required
            />
          </div>

          <textarea
            placeholder="Write your comment..."
            className="discussion-section-textarea"
            rows="5"
            required
          ></textarea>

          <button type="submit" className="discussion-section-submit-btn">
            Post Comment
          </button>

        </form>
      </div>

    </motion.div>
  );
}

export default DiscussionSection;