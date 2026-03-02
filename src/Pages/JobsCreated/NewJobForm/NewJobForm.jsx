import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./NewJobForm.css";
import { motion } from "framer-motion";

function NewJobForm() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="jobform-wrapper"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="jobform-card">
        <div className="jobform-header">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <FaArrowLeft /> Back
          </button>
          <h2>Create New Job</h2>
        </div>

        <form className="jobform-form">
          {/* Row 1 */}
          <motion.div
            className="form-group"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <label>Company Name</label>
            <input type="text" />
          </motion.div>

          <motion.div
            className="form-group"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <label>Job Title</label>
            <input type="text" />
          </motion.div>

          {/* Row 2 */}
          <motion.div
            className="form-group"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <label>Salary</label>
            <input type="text" />
          </motion.div>

          <motion.div
            className="form-group"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <label>Location</label>
            <input type="text" />
          </motion.div>

          {/* Row 3 */}
          <motion.div
            className="form-group"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <label>Job Type</label>
            <select>
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Internship</option>
              <option>Remote</option>
            </select>
          </motion.div>

          <motion.div
            className="form-group"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <label>Experience Level</label>
            <select>
              <option>Junior</option>
              <option>Mid Level</option>
              <option>Senior</option>
            </select>
          </motion.div>

          {/* Row 4 */}
          <motion.div
            className="form-group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <label>No. of Positions</label>
            <input type="number" />
          </motion.div>

          {/* Full Width Fields */}
          <motion.div
            className="form-group full-width"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <label>Description</label>
            <textarea></textarea>
          </motion.div>

          <motion.div
            className="form-group full-width"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <label>Requirements</label>
            <textarea></textarea>
          </motion.div>

          <button className="post-btn">Post New Job</button>
        </form>
      </div>
    </motion.div>
  );
}

export default NewJobForm;
