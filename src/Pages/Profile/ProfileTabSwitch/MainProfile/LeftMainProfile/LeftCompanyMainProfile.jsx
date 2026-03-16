import "./LeftCompanyMainProfile.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { api } from "@/Utils/axiosConfig";
import { apiTryCatch } from "@/Utils/trycatch";

function LeftCompanyMainProfile({ refreshProfile }) {

  const [data, setData] = useState(null);

  async function getProfile() {
    await apiTryCatch(async () => {

      const response = await api.get("/company-profile");

      const profile = response?.data?.data;

      setData(profile);

    });
  }

  useEffect(() => {
    getProfile();
  }, [refreshProfile]);

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
            {data?.aboutCompany || "No information added yet."}
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
            <span className="right-main-value">
              {data?.founded || "Not added"}
            </span>
          </div>

          <div className="right-company-main-detail-row">
            <span className="right-main-label">Industry</span>
            <span className="right-main-value">
              {data?.industry || "Not added"}
            </span>
          </div>

          <div className="right-company-main-detail-row">
            <span className="right-main-label">Funding</span>
            <span className="right-main-value">
              {data?.funding || "Not added"}
            </span>
          </div>

          <div className="right-company-main-detail-row">
            <span className="right-main-label">Employees</span>
            <span className="right-main-value">
              {data?.employees || "Not added"}+
            </span>
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
            <h3>{data?.employees || "0"}</h3>
            <p>Employees</p>
          </div>

          <div className="stat-box">
            <h3>{data?.openjobs || "0"}</h3>
            <p>Open Jobs</p>
          </div>

          <div className="stat-box">
            <h3>{data?.location || "0"}</h3>
            <p>Offices</p>
          </div>

          <div className="stat-box">
            <h3>{data?.countries || "0"}</h3>
            <p>Countries </p>
          </div>

        </div>

      </motion.div>

    </div>
  );
}

export default LeftCompanyMainProfile;