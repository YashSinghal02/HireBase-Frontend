import "./ProfileHeader.css";
import profilebanner from "../../../assets/profilebanner.png";
import { motion } from "framer-motion";
import { useState, useEffect, useContext } from "react";
import { api } from "@/Utils/axiosConfig";
import { apiTryCatch } from "@/Utils/trycatch";
import { AuthContext } from "@/AuthContext/AuthContext";

function ProfileHeader({ refreshProfile }) {
  const { name, role, userId } = useContext(AuthContext);
  const [data, setData] = useState(null);

  // ✅ Fetch Profile
  async function getProfile() {
    await apiTryCatch(async () => {
      let response;

      if (role === "employer") {
        // Use new backend with populated user fields
        response = await api.get("/company-profile");
      } else {
        response = await api.get("/profile");
      }

      const profile = response?.data?.data;
      console.log("PROFILE DATA:", profile);

      setData(profile);
    });
  }

  useEffect(() => {
    getProfile();
  }, []);

  // ✅ Upload Handler
  const handleFileUpload = async (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type === "application/pdf" && file.size > 10 * 1024 * 1024) {
      return alert("PDF must be less than 10MB");
    }

    if (file.type.startsWith("image/") && file.size > 5 * 1024 * 1024) {
      return alert("Image must be less than 5MB");
    }

    const formData = new FormData();
    formData.append(type, file);

    await api.post(`/uploads/user/${userId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    getProfile();
  };

  return (
    <div>
      {/* Banner */}
      <div className="profile-header-banner-img">
        <label className="upload-banner">
          <input
            hidden
            type="file"
            accept="image/*"
            onChange={(e) => handleFileUpload(e, "banner")}
          />
          ✎
        </label>

        {/* ✅ Use user banner if available, otherwise fallback */}
        <img
          src={
            data?.userId?.banner || data?.companylogo || profilebanner
          }
          alt="banner"
        />
      </div>

      {/* Avatar + Text */}
      <div className="profile-header-img-txt-flx">
        <motion.div
          className="profile-header-main-img"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={
              data?.userId?.profile ||
              data?.companylogo ||
              "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg"
            }
            alt="avatar"
          />

          <label className="upload-avatar">
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={(e) => handleFileUpload(e, "profile")}
            />
            Upload Image
          </label>
        </motion.div>

        <motion.div
          className="profile-header-txt"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>{name || "User"}</h3>

          <p>{role === "employee" ? data?.occupation || "N/A" : "Recruiter"}</p>
        </motion.div>
      </div>
    </div>
  );
}

export default ProfileHeader;