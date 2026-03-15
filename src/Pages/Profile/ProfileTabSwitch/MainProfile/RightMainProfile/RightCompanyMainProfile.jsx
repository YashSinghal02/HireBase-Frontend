import "./RightCompanyMainProfile.css";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function RightCompanyMainProfile() {
  return (
    <div className="right-company-main-wrapper">

      {/* COMPANY OVERVIEW */}
      <motion.div
        className="right-company-main-profile"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <h2 className="right-company-main-heading">Company Overview</h2>

        <p className="right-company-main-text">
          We build modern digital platforms and scalable web applications for
          startups and enterprises worldwide. Our focus is on innovation,
          product engineering, and delivering high-performance technology
          solutions.
        </p>

        <div className="right-company-main-detail-row">
          <span className="right-main-label">Website</span>
          <span className="right-main-value">www.company.com</span>
        </div>

        <div className="right-company-main-detail-row">
          <span className="right-main-label">Email</span>
          <span className="right-main-value">hirebase@gmail.com</span>
        </div>

        <div className="right-company-main-detail-row">
          <span className="right-main-label">Social</span>

          <div className="right-main-social-icons">
            <span><FaLinkedin /></span>
            <span><FaGithub /></span>
            <span><FaInstagram /></span>
          </div>
        </div>

      </motion.div>


      {/* GLOBAL OFFICES */}
      <motion.div
        className="right-company-main-profile"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <h2 className="right-company-main-heading">Global Offices</h2>

        <div className="right-company-main-detail-row-location">
          <h3>Canada Office</h3>
          <h5>Toronto</h5>
          <p>127 Downtown Street</p>
        </div>

        <div className="right-company-main-detail-row-location">
          <h3>Australia Office</h3>
          <h5>Sydney</h5>
          <p>22 Business Avenue</p>
        </div>

        <div className="right-company-main-detail-row-location">
          <h3>United Kingdom Office</h3>
          <h5>London</h5>
          <p>45 Tech Park Road</p>
        </div>

      </motion.div>

    </div>
  );
}

export default RightCompanyMainProfile;