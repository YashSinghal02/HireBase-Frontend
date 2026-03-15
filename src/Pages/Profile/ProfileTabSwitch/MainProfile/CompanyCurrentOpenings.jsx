import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { IoLocationOutline } from "react-icons/io5";
import { MdEdit, MdDelete } from "react-icons/md";
import { toast } from "react-hot-toast";
// import { apiTryCatch } from "@/Utils/trycatch";
import { AuthContext } from "@/AuthContext/AuthContext";
import { api } from "@/Utils/axiosConfig";
import { apiTryCatch } from "@/Utils/trycatch";
// apiTryCatch
// import "./CompanyCurrentOpenings.css";

function CompanyCurrentOpenings() {
  const { userId } = useContext(AuthContext); // assuming userId is stored here
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  // Fetch jobs from API
  async function getJobs() {
    await apiTryCatch(async () => {
      const response = await api.get(`/employer/getjobs/${userId}`);
      setJobs(response.data.data.createdJobs || []);
      setFilteredJobs(response.data.data.createdJobs || []);
    });
  }

  // Delete job
  async function deleteJob(id) {
    const confirmDelete = window.confirm("Are you sure you want to delete this job?");
    if (!confirmDelete) return;

    await apiTryCatch(async () => {
      const response = await api.delete(`/employer/jobs/${id}`);
      toast.success(response?.data?.message || "Job deleted successfully!");
      getJobs(); // refresh list
    });
  }

  useEffect(() => {
    if (userId) getJobs();
  }, [userId]);

  if (!jobs || jobs.length === 0) {
    return (
      <div className="company-current-openings">
        <motion.div
          className="left-company-main-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="left-company-main-title">Current Openings</h2>
          <div className="left-company-main-card">
            <p>No current job openings.</p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="company-current-openings">
      <motion.div
        className="left-company-main-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
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

            {filteredJobs.map((job) => (
              <div key={job._id} className="company-row">
                <div>{job.title}</div>
                <div>{job.category}</div>
                <div>{job.salary}</div>
                <div className="location-col">
                  <IoLocationOutline /> {job.location}
                </div>
                <div className="action-col">
                  <div className="action-btn edit-btn">
                    <MdEdit size={18} />
                  </div>
                  <div
                    className="action-btn delete-btn"
                    onClick={() => deleteJob(job._id)}
                  >
                    <MdDelete size={18} />
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default CompanyCurrentOpenings;