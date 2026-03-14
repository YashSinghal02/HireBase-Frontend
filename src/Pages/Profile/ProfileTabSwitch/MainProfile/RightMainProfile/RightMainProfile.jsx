import "./RightMainProfile.css";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect, useContext } from "react";
import { api } from "@/Utils/axiosConfig";
import { apiTryCatch } from "@/Utils/trycatch";
import { AuthContext } from "@/AuthContext/AuthContext";



function RightMainProfile({ refreshProfile }) {
    const { email,phone } = useContext(AuthContext);
  console.log("refreshProfile:", refreshProfile);
    const [data, setData] = useState(null);
  
    async function getProfile() {
      await apiTryCatch(async () => {
        const response = await api.get("/profile");
        console.log(response.data)
         const profile = response?.data?.data;
          setData(profile);
        // setData(response.data.data);
      });
    }
    
      useEffect(() => {
        getProfile();
      }, [refreshProfile]);

  return (
    <motion.div className="right-main-profile"
    initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          >
      <div className="right-main-person-details">
        <h2 className="right-main-heading">Personal Details</h2>

        <div className="right-main-detail-row">
          <span className="right-main-label">Email :</span>
          <span className="right-main-value">{email || "N/A"}</span>
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
          <span className="right-main-value">{phone || "N/A"}</span>
        </div>

        {/* Social Row */}
        <div className="right-main-detail-row">
          <span className="right-main-label">Social :</span>

          <div className="right-main-social-icons">
            <span><a href={data?.linkedIn} target="_blank" rel="noreferrer"><FaLinkedin /></a></span>
            <span><a href={data?.gitHub} target="_blank" rel="noreferrer"><FaGithub /></a></span>
            <span><a href={data?.instagram} target="_blank" rel="noreferrer"><FaInstagram /></a></span>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

export default RightMainProfile;