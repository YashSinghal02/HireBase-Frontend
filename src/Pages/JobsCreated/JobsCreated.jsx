import { Link } from "react-router-dom";
import EmployerJobCardCreated from "./EmployerJobCardCreated";
import "./JobsCreated.css";
import { motion } from "framer-motion";
import { apiTryCatch } from "@/Utils/trycatch";
import { api } from "@/Utils/axiosConfig";
import React, { useEffect, useState, useRef, useContext } from "react";
import toast from "react-hot-toast";
import dayjs from "dayjs";
import { AuthContext } from "@/AuthContext/AuthContext";
import JobCardSkeleton from "@/Components/JobsMapCard/JobCardSkeleton";

function JobsCreated() {
  const { userId } = useContext(AuthContext);

  // ✅ Loading states
  const [loading, setLoading] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(false);

  // ✅ Jobs state
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  // ✅ Fetch Jobs (same pattern as AppliedJobs)
  useEffect(() => {
    let timer;

    const fetchJobs = async () => {
      setLoading(true);

      // ⏳ show skeleton only if API is slow
      timer = setTimeout(() => {
        setShowSkeleton(true);
      }, 300);

      await apiTryCatch(async () => {
        const response = await api.get(`/user/getjobs/${userId}`);

        const jobsData = response?.data?.data?.createdJobs || [];

        setJobs(jobsData);
        setFilteredJobs(jobsData);
      });

      clearTimeout(timer);
      setLoading(false);
      setShowSkeleton(false);
    };

    if (userId) {
      fetchJobs();
    }

    return () => clearTimeout(timer);
  }, [userId]);

  // ✅ Delete Job
  async function deleteCard(id) {
    await apiTryCatch(async () => {
      const response = await api.delete(`/employer/jobs/${id}`);
      toast.success(response?.data?.message);

      // refresh jobs
      const res = await api.get(`/user/getjobs/${userId}`);
      const jobsData = res?.data?.data?.createdJobs || [];

      setJobs(jobsData);
      setFilteredJobs(jobsData);
    });
  }

  // ✅ Search Filter
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
        job.experienceLevel?.toLowerCase().includes(userInput)
    );

    setFilteredJobs(result);
  }

  return (
    <div className="job-created-wrapper">
      {/* Header */}
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

      {/* ✅ Loading / Skeleton / Data */}
      {loading ? (
        showSkeleton ? (
          <div className="job-card-skeleton-wrapper-jobcreated">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <JobCardSkeleton key={i} />
              ))}
          </div>
        ) : (
          <div style={{ height: "200px" }} />
        )
      ) : (
        <EmployerJobCardCreated
          jobs={filteredJobs}
          deleteCard={deleteCard}
        />
      )}
    </div>
  );
}

export default JobsCreated;