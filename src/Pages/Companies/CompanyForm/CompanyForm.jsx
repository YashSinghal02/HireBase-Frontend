import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./CompanyForm.css";
import { motion } from "framer-motion";
import { api } from "@/Utils/axiosConfig";
import toast from "react-hot-toast";

function CompanyForm() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [logoFile, setLogoFile] = useState(null);

  const [data, setData] = useState({
    companyName: "",
    website: "",
    location: "",
    description: "",
    logo: "",
  });

  // ================= SUBMIT =================
async function SubmitForm(e) {
  e.preventDefault();
  if (loading) return;

  // ✅ Validation
  if (
    !data.companyName ||
    !data.website ||
    !data.location ||
    !data.description ||
    !logoFile
  ) {
    toast.error("Please fill all required fields");
    return;
  }

  setLoading(true);

  try {
    let logoUrl = "";

    if (logoFile) {
      const formData = new FormData();
      formData.append("file", logoFile);

      const res = await api.post("/uploads/single", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      logoUrl = res?.data?.url;
    }

    const payload = {
      ...data,
      logo: logoUrl,
    };

    const response = await api.post("/companies/", payload);

    toast.success(response?.data?.message || "Company Created");
    navigate("/dashboard/companies");

  } catch (error) {
    toast.error(error?.response?.data?.message || "Something went wrong");
  } finally {
    setLoading(false);
  }
}

  // ================= LOGO =================
  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setLogoFile(file);
  };

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

        <form className="company-form" onSubmit={SubmitForm}>
          
          {/* Company Name */}
          <div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              placeholder="e.g. Google, Infosys"
              value={data.companyName}
              onChange={(e) =>
                setData({ ...data, companyName: e.target.value })
              }
            />
          </div>

          {/* Logo */}
          <div className="form-group">
            <label>Logo</label>
            <input type="file" accept="image/*" onChange={handleLogoUpload} />
          </div>

          {/* Website */}
          <div className="form-group">
            <label>Website</label>
            <input
              type="text"
              placeholder="https://company.com"
              value={data.website}
              onChange={(e) =>
                setData({ ...data, website: e.target.value })
              }
            />
          </div>

          {/* Location */}
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              placeholder="e.g. Bangalore, India"
              value={data.location}
              onChange={(e) =>
                setData({ ...data, location: e.target.value })
              }
            />
          </div>

          {/* Description */}
          <div className="form-group full-width">
            <label>Description</label>
            <textarea
              placeholder="Write about the company..."
              value={data.description}
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
            ></textarea>
          </div>

          <button type="submit" className="update-btn" disabled={loading}>
            {loading ? "Creating..." : "Create Company"}
          </button>

        </form>
      </div>
    </motion.div>
  );
}

export default CompanyForm;