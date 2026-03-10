import React from "react";
import { useNavigate,useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState,useEffect } from "react";
import { api } from "@/Utils/axiosConfig";
import { apiTryCatch } from "@/Utils/trycatch";
import toast from "react-hot-toast";


function EditCompany() {
      const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    companyName: "",
    website: "",
    location: "",
    description: "",
    logo: "",
  });

  // Fetch Company
    useEffect(() => {
  
      const fetchCompany = async () => {
  
        await apiTryCatch(async () => {
  
          const response = await api.get(`/companies/${id}`);
          const company = response.data.data;
  
          setData({
            companyName: company.companyName || "",
            website: company.website || "",
            location: company.location || "",
            description: company.description || "",
            logo: "",
          });
  
        });
  
      };
  
      fetchCompany();
  
    }, [id]);

   async function SubmitForm(e) {

    e.preventDefault();

    await apiTryCatch(async () => {

      const response = await api.put(`/companies/${id}`, data);

      toast.success(response?.data?.message);

      navigate("/dashboard/companies");

    });

  }

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
          <h2>Edit Company Setup</h2>
        </div>
        <form className="company-form" onSubmit={SubmitForm}>
          {/* Row 1 */}
          <motion.div
            className="form-group"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              value={data.companyName}
              onChange={(e) =>
                setData({ ...data, companyName: e.target.value })
              }
            />
          </motion.div>

          <motion.div
            className="form-group"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <label htmlFor="logo">Logo</label>
            <input
              type="file"
              onChange={(e) => setData({ ...data, logo: e.target.files[0] })}
            />
          </motion.div>

          {/* Row 2 */}
          <motion.div
            className="form-group"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <label htmlFor="website">Website</label>
            <input
              type="text"
              value={data.website}
              onChange={(e) => setData({ ...data, website: e.target.value })}
            />
          </motion.div>

          <motion.div
            className="form-group"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <label htmlFor="location">Location</label>
            <input
              type="text"
              value={data.location}
              onChange={(e) => setData({ ...data, location: e.target.value })}
            />
          </motion.div>

          {/* Full Width Description at End */}
          <motion.div
            className="form-group full-width"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <label htmlFor="description">Description</label>
            <textarea
              value={data.description}
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
            ></textarea>
          </motion.div>

          <button className="update-btn">Update</button>
        </form>
      </div>
    </motion.div>
  );
}

export default EditCompany;
