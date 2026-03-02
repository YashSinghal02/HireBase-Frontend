import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./CompanyForm.css";
import { motion } from "framer-motion";

function CompanyForm() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="company-wrapper"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="company-card">
        <div className="company-header">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <FaArrowLeft /> Back
          </button>
          <h2>Company Setup</h2>
        </div>
        <form className="company-form">
          {/* Row 1 */}
          <motion.div className="form-group"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
            <label>Company Name</label>
            <input type="text" />
          </motion.div>

          <motion.div className="form-group"
          initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <label>Logo</label>
            <input type="file" />
          </motion.div>

          {/* Row 2 */}
          <motion.div className="form-group"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          >
            <label>Website</label>
            <input type="text" />
          </motion.div>

          <motion.div className="form-group"
          initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <label>Location</label>
            <input type="text" />
          </motion.div>

          {/* Full Width Description at End */}
          <motion.div className="form-group full-width"
          initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
          >
            <label>Description</label>
            <textarea></textarea>
          </motion.div>

          <button className="update-btn">Update</button>
        </form>
      </div>
    </motion.div>
  );
}

export default CompanyForm;
