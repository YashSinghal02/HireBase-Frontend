import { Link } from "react-router-dom";
import EmployerJobCardCreated from "./EmployerJobCardCreated";
import "./jobscreated.css";
import { motion } from "framer-motion";
import { apiTryCatch } from "@/Utils/trycatch";
import { api } from "@/Utils/axiosConfig";
import React, { useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";
import dayjs from "dayjs";

function JobsCreated() {
  // For Get JOb Card
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  async function getJobs() {
    await apiTryCatch(async () => {
      const response = await api.get("/employer/jobs");
      setJobs(response.data.data);
      setFilteredJobs(response.data.data);
    });
  }
  useEffect(() => {
    getJobs();
  }, []);

  // Delte
  async function deleteCard(id) {
    await apiTryCatch(async () => {
      const response = await api.delete(`/employer/jobs/${id}`);
      toast.success(response?.data?.message);
      getJobs();
    });
  }

  // Search Filter
  const input = useRef();

  function SearchItem() {
    const userInput = input.current.value.toLowerCase();

    const result = jobs.filter(
      (job) =>
        job.jobTitle?.toLowerCase().includes(userInput) ||
        job.companyName?.toLowerCase().includes(userInput) ||
        job.location?.toLowerCase().includes(userInput) ||
        job.description?.toLowerCase().includes(userInput) ||
        dayjs(job.createdAt)
          .format("DD-MMM-YYYY")
          ?.toLowerCase()
          .includes(userInput) ||
        job.experienceLevel?.toLowerCase().includes(userInput),
    );

    setFilteredJobs(result);
  }

  return (
    <div className="job-created-wrapper">
      <div className="job-created-header">
        <motion.input
          type="text"
          placeholder="Filter by name"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          ref={input}
          onChange={SearchItem}
        />
        <Link to="/dashboard/jobsform">
          <motion.button
            className="new-job-btn"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            New Job
          </motion.button>
        </Link>
      </div>

      <EmployerJobCardCreated jobs={filteredJobs} deleteCard={deleteCard} />
    </div>
  );
}

export default JobsCreated;
