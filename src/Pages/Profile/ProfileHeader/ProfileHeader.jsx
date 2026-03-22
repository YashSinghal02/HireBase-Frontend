import "./ProfileHeader.css";
import defaultbanner from "../../../assets/defaultbanner.png";
import defaultprofile from "../../../assets/defaultprofile.jpg";
import { motion } from "framer-motion";
import { useState, useEffect, useContext } from "react";
import { api } from "@/Utils/axiosConfig";
import { AuthContext } from "@/AuthContext/AuthContext";
import ProfileHeaderSkeleton from "./ProfileHeaderSkeleton";
import { apiTryCatch } from "@/Utils/trycatch";


function ProfileHeader({ refreshProfile }) {
  const { name, role, userId } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  // ✅ Fetch Profile
async function getProfile() {
  setLoading(true);

  try {
    await apiTryCatch(async () => {
      let response;

      if (role === "employer") {
        response = await api.get("/company-profile");
      } else {
        response = await api.get("/profile");
      }

      const profile = response?.data?.data;
      setData(profile);
    });
  } finally {
    setLoading(false); // ✅ always runs
  }
}

useEffect(() => {
  if (role) {
    getProfile();
  }
}, [role]);

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

    try {
      await api.post(`/uploads/user/${userId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      getProfile(); // refresh after upload
    } catch (error) {
      console.log("Upload error:", error);
    }
  };

  // ✅ Skeleton Loader (NO flicker)
 if (loading) {
  return <ProfileHeaderSkeleton />;
}

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

        <img
          src={
            data?.userId?.banner ||
            data?.companylogo ||
            defaultbanner
          }
          alt="banner"
        />
      </div>

      {/* Avatar + Text */}
      <div className="profile-header-img-txt-flx">
        <motion.div
          className="profile-header-main-img"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={
              data?.userId?.profile
                ? data.userId.profile
                : data?.companylogo
                ? data.companylogo
                : defaultprofile
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
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>{name || "User"}</h3>

          <p>
            {role === "employee"
              ? data?.occupation || "N/A"
              : "Recruiter"}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default ProfileHeader;