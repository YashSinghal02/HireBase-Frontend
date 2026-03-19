import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { api } from "@/Utils/axiosConfig";
import toast from "react-hot-toast";

function EditCompany() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [existingLogo, setExistingLogo] = useState(null);
  const [logoFile, setLogoFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    companyName: "",
    website: "",
    location: "",
    description: "",
    logo: "",
  });

  // ================= FETCH =================
  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const response = await api.get(`/companies/${id}`);
        const company = response.data.data;

        setData({
          companyName: company.companyName || "",
          website: company.website || "",
          location: company.location || "",
          description: company.description || "",
          logo: company.logo || "",
        });

        setExistingLogo(company.logo || null); // ✅ fixed
      } catch (error) {
        toast.error("Failed to load company");
      }
    };

    fetchCompany();
  }, [id]);

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
  (!existingLogo && !logoFile)
) {
      toast.error("Please fill all required fields");
      return;
    }
    setLoading(true);

    try {
      let logoUrl = existingLogo; // ✅ keep old logo by default

      // Upload new logo if selected
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

      const response = await api.put(`/companies/${id}`, payload);

      toast.success(response?.data?.message || "Updated Successfully");
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
    <motion.div className="company-wrapper">
      <div className="company-card">
        <div className="company-header">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <FaArrowLeft /> Back
          </button>
          <h2>Edit Company Setup</h2>
        </div>

        <form className="company-form" onSubmit={SubmitForm}>
          
          <div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              value={data.companyName}
              onChange={(e) =>
                setData({ ...data, companyName: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>Logo</label>
            <input type="file" accept="image/*" onChange={handleLogoUpload} />

            {/* ✅ Show existing logo */}
            {existingLogo && !logoFile && (
              <img
                src={existingLogo}
                alt="logo"
                style={{ width: "60px", marginTop: "10px" }}
              />
            )}

            {logoFile && (
  <img
    src={URL.createObjectURL(logoFile)}
    alt="preview"
    style={{ width: "60px", marginTop: "10px" }}
  />
)}
          </div>

          <div className="form-group">
            <label>Website</label>
            <input
              type="text"
              value={data.website}
              onChange={(e) =>
                setData({ ...data, website: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              value={data.location}
              onChange={(e) =>
                setData({ ...data, location: e.target.value })
              }
            />
          </div>

          <div className="form-group full-width">
            <label>Description</label>
            <textarea
              value={data.description}
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
            ></textarea>
          </div>

          <button type="submit" className="update-btn" disabled={loading}>
            {loading ? "Updating..." : "Update Company"}
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default EditCompany;