import "./LeftMainProfile.css";
import { motion } from "framer-motion";
import { useState, useEffect, useContext } from "react";
import { api } from "@/Utils/axiosConfig";
import { apiTryCatch } from "@/Utils/trycatch";
import { AuthContext } from "@/AuthContext/AuthContext";

function LeftMainProfile({ refreshProfile, userId: viewUserId }) {
  const { role, userId: loggedInUserId } = useContext(AuthContext);

  const isOwnProfile = !viewUserId;

  const [data, setData] = useState(null);

  // ✅ Fetch profile
  async function getProfile() {
    await apiTryCatch(async () => {
      let response;

      if (viewUserId) {
        // 👀 Viewing other user
        response = await api.get(`/profile/${viewUserId}`);
      } else {
        // 👤 Own profile
        response = await api.get("/profile");
      }

      setData(response?.data?.data);
      // console.log(response?.data?.data)
    });
  }

  useEffect(() => {
    getProfile();
  }, [viewUserId, refreshProfile]);

  // ✅ Upload Handler (ONLY OWN PROFILE)
  const handleFileUpload = async (e, type) => {
    if (!isOwnProfile) return; // 🔒 prevent editing others

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

    await api.post(`/uploads/user/${loggedInUserId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    getProfile();
  };

  return (
    <div className="left-main-profile">
      {/* About */}
      <motion.div
        className="left-main-section about"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h2 className="left-main-title">About</h2>

        <div className="left-main-card">
          <p>{data?.about || "No information added yet."}</p>
        </div>
      </motion.div>

      {/* Education */}
      <motion.div
        className="left-main-section education"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <h2 className="left-main-title">Education</h2>

        <div className="left-main-card">
          {Array.isArray(data?.education) && data.education.length > 0 ? (
            data.education.map((edu, index) => (
              <div key={index} className="education-item">
                <h4>{edu}</h4>
              </div>
            ))
          ) : (
            <p>No Education added yet</p>
          )}
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div
        className="left-main-section skills"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="left-main-title">Skills</h2>

        <div className="left-main-card skills-wrapper">
          {Array.isArray(data?.skills) && data.skills.length > 0 ? (
            data.skills.map((skill, index) => <span key={index}>{skill}</span>)
          ) : (
            <p>No skills added yet</p>
          )}
        </div>
      </motion.div>

      {/* Resume */}
      <motion.div
        className="left-main-section resume"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="left-main-title">Resume</h2>

  <div className="left-main-card resume-wrapper">

  {/* 👤 Own Profile */}
  {isOwnProfile && role === "employee" && (
    <div style={{ marginTop: "10px" }}>
      <label className="upload-resume" style={{ cursor: "pointer" }}>
        <input
          type="file"
          hidden
          accept="application/pdf"
          onChange={(e) => handleFileUpload(e, "resume")}
        />
        Upload Resume
      </label>

      {data?.userId?.resume ? (
        <div style={{ fontSize: "12px", marginTop: "5px" }}>
          <p style={{ color: "green" }}>✅ Resume Uploaded</p>
          <a href={data.userId.resume} target="_blank" rel="noreferrer">
            📄 View Resume
          </a>
        </div>
      ) : (
        <p style={{ fontSize: "12px", color: "#888" }}>
          No resume uploaded
        </p>
      )}
    </div>
  )}

  {/* 👀 Employer View */}
  {!isOwnProfile && (
    <div style={{ marginTop: "10px" }}>
      {data?.userId?.resume ? (
        <a href={data.userId.resume} target="_blank" rel="noreferrer">
          📄 View Resume
        </a>
      ) : (
        <p style={{ fontSize: "12px", color: "#888" }}>
          No resume available
        </p>
      )}
    </div>
  )}

</div>
      </motion.div>
    </div>
  );
}

export default LeftMainProfile;