import { Link } from "react-router-dom";
import "./Companies.css";
import CompanyCreate from "./CompanyCreate";
import { motion } from "framer-motion";
import { apiTryCatch } from "@/Utils/trycatch";
import { api } from "@/Utils/axiosConfig";
import React, { useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";
import dayjs from "dayjs";


function Companies() {
    // For Get JOb Card
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

 async function getJobs() {
  await apiTryCatch(async () => {
    const response = await api.get("/companies/");
    setJobs(response.data.data);
    setFilteredJobs(response.data.data);
  });
}
  useEffect(() => {
    getJobs()
  }, []);

  // Delte
    async function deleteCard(id) {
    await apiTryCatch(async()=>{
    const response=await api.delete(`/companies/${id}`);
      toast.success(response?.data?.message);
      getJobs()
    })
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
        dayjs(job.createdAt).format("DD-MMM-YYYY")?.toLowerCase().includes(userInput) ||
        job.experienceLevel?.toLowerCase().includes(userInput),
    );

    setFilteredJobs(result);
  }
  return (
    <motion.div
      className="companies-wrapper"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="companies-header">
        {/* Filter */}
        <motion.input
          type="text"
          placeholder="Filter by name"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          ref={input} onChange={SearchItem} 
        />
        {/* new-company-btn */}
        <Link to="/dashboard/newcompany">
          <motion.button
            className="new-company-btn"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            New Company
          </motion.button>
        </Link>
      </div>

      <CompanyCreate jobs={filteredJobs} deleteCard={deleteCard}/>

      <p className="companies-footer">
        A list of your recent registered companies
      </p>
    </motion.div>
  );
}

export default Companies;
