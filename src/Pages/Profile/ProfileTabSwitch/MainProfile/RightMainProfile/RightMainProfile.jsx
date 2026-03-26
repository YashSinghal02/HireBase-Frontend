import "./RightMainProfile.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect, useContext } from "react";
import { api } from "@/Utils/axiosConfig";
import { apiTryCatch } from "@/Utils/trycatch";
import { AuthContext } from "@/AuthContext/AuthContext";

function RightMainProfile({ refreshProfile, userId }) {
  const { email, phone } = useContext(AuthContext);

  const [data, setData] = useState(null);

  // ✅ Fetch profile (own OR other)
  async function getProfile() {
    await apiTryCatch(async () => {
      let response;

      if (userId) {
        // 👀 Viewing other user
        response = await api.get(`/profile/${userId}`);
      } else {
        // 👤 Own profile
        response = await api.get("/profile");
      }

      setData(response?.data?.data);
    });
  }

  useEffect(() => {
    getProfile();
  }, [refreshProfile, userId]);

  // ✅ Decide which data to show
 

  const displayEmail = data?.userId?.email;
  const displayPhone = data?.userId?.phone;

  return (
    <motion.div
      className="right-main-profile"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="right-main-person-details">
        <h2 className="right-main-heading">Personal Details</h2>

        <div className="right-main-detail-row">
          <span className="right-main-label">Email :</span>
          <span className="right-main-value">{displayEmail || "N/A"}</span>
        </div>

        <div className="right-main-detail-row">
          <span className="right-main-label">Age :</span>
          <span className="right-main-value">{data?.age || "N/A"}</span>
        </div>

        <div className="right-main-detail-row">
          <span className="right-main-label">City :</span>
          <span className="right-main-value">{data?.city || "N/A"}</span>
        </div>

        <div className="right-main-detail-row">
          <span className="right-main-label">Country :</span>
          <span className="right-main-value">{data?.country || "N/A"}</span>
        </div>

        <div className="right-main-detail-row">
          <span className="right-main-label">Address :</span>
          <span className="right-main-value">{data?.address || "N/A"}</span>
        </div>

        <div className="right-main-detail-row">
          <span className="right-main-label">Mobile :</span>
          <span className="right-main-value">{displayPhone || "N/A"}</span>
        </div>

        {/* Social Row */}
        <div className="right-main-detail-row">
          <span className="right-main-label">Social :</span>

          <div className="right-main-social-icons">
            <span className={!data?.linkedIn?.trim() ? "disabled-icon" : ""}>
              {data?.linkedIn?.trim() ? (
                <a href={data.linkedIn} target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
              ) : (
                <FaLinkedin />
              )}
            </span>
            <span className={!data?.gitHub?.trim() ? "disabled-icon" : ""}>
              {data?.gitHub?.trim() ? (
                <a href={data.gitHub} target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
              ) : (
                <FaGithub />
              )}
            </span>
            <span className={!data?.instagram?.trim() ? "disabled-icon" : ""}>
              {data?.instagram?.trim() ? (
                <a href={data.instagram} target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>
              ) : (
                <FaInstagram />
              )}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default RightMainProfile;
