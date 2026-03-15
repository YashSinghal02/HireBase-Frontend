import "./LeftCompanyMainProfile.css";
import { motion } from "framer-motion";
import { IoLocationOutline } from "react-icons/io5";
import { MdEdit, MdDelete } from "react-icons/md";

function LeftCompanyMainProfile() {
  return (
    <div className="left-company-main-profile">

      {/* ABOUT COMPANY */}
      <motion.div
        className="left-company-main-section"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <h2 className="left-company-main-title">About Company</h2>

        <div className="left-company-main-card">
          <p>
            Our company specializes in building scalable digital platforms,
            modern web applications and enterprise solutions. We focus on
            product engineering, innovation and delivering high-performance
            technology solutions to businesses worldwide.
          </p>
        </div>
      </motion.div>


      {/* ORGANIZATION DETAILS */}
      <motion.div
        className="left-company-main-section"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <h2 className="left-company-main-title">Organization Details</h2>

        <div className="left-company-main-card">

          <div className="right-company-main-detail-row">
            <span className="right-main-label">Founded</span>
            <span className="right-main-value">2015</span>
          </div>

          <div className="right-company-main-detail-row">
            <span className="right-main-label">Industry</span>
            <span className="right-main-value">Information Technology</span>
          </div>

          <div className="right-company-main-detail-row">
            <span className="right-main-label">Funding</span>
            <span className="right-main-value">Series A</span>
          </div>

          <div className="right-company-main-detail-row">
            <span className="right-main-label">Employees</span>
            <span className="right-main-value">120+</span>
          </div>

        </div>
      </motion.div>


      {/* COMPANY STATS */}
      <motion.div
        className="left-company-main-section"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <h2 className="left-company-main-title">Company Stats</h2>

        <div className="left-company-main-card stats-grid">

          <div className="stat-box">
            <h3>120+</h3>
            <p>Employees</p>
          </div>

          <div className="stat-box">
            <h3>12</h3>
            <p>Open Jobs</p>
          </div>

          <div className="stat-box">
            <h3>15+</h3>
            <p>Countries Served</p>
          </div>

          <div className="stat-box">
            <h3>8+</h3>
            <p>Years Experience</p>
          </div>

        </div>
      </motion.div>


      {/* CURRENT OPENINGS */}
      {/* <motion.div
        className="left-company-main-section"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <h2 className="left-company-main-title">Current Openings</h2>

        <div className="left-company-main-card">

          <div className="company-table">

            <div className="company-table-head">
              <span>Job Title</span>
              <span>Category</span>
              <span>Salary</span>
              <span>Location</span>
              <span>Action</span>
            </div>


            <div className="company-row">

              <div>Full Stack Developer</div>
              <div>Engineering</div>
              <div>12-15 LPA</div>

              <div className="location-col">
                <IoLocationOutline /> India
              </div>

              <div className="action-col">

                <div className="action-btn edit-btn">
                  <MdEdit size={18}/>
                </div>

                <div className="action-btn delete-btn">
                  <MdDelete size={18}/>
                </div>

              </div>

            </div>


            <div className="company-row">

              <div>UI/UX Designer</div>
              <div>Design</div>
              <div>8-10 LPA</div>

              <div className="location-col">
                <IoLocationOutline /> Remote
              </div>

              <div className="action-col">

                <div className="action-btn edit-btn">
                  <MdEdit size={18}/>
                </div>

                <div className="action-btn delete-btn">
                  <MdDelete size={18}/>
                </div>

              </div>

            </div>

          </div>

        </div>
      </motion.div> */}

    </div>
  );
}

export default LeftCompanyMainProfile;