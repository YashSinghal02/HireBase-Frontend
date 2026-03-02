import { Link } from "react-router-dom";
import EmployerJobCardCreated from "./EmployerJobCardCreated";
import "./jobscreated.css";
import { motion } from "framer-motion";


function JobsCreated() {
  return (
    <div className="job-created-wrapper">
      <div className="job-created-header">
        <motion.input type="text" placeholder="Filter by name" 
        initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}/>
        <Link to="/dashboard/jobsform">
          <motion.button className="new-job-btn"
          initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>New Job</motion.button>
        </Link>
      </div>

      <EmployerJobCardCreated />
    </div>
  );
}

export default JobsCreated;