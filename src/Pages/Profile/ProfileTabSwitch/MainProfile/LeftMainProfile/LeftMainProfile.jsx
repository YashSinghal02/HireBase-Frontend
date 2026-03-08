import "./LeftMainProfile.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { api } from "@/Utils/axiosConfig";
import { apiTryCatch } from "@/Utils/trycatch";


function LeftMainProfile({ refreshProfile }) {


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
          <p>
            {data?.about || "No information added yet."}
          </p>
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

          {Array.isArray(data?.skills) && data.skills.length > 0 ?  (
            data.skills.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))
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

          {data?.resume ? (
            <a href={data.resume} target="_blank" rel="noreferrer">
              View Resume
            </a>
          ) : (
            <span className="resume-text">No resume uploaded</span>
          )}

          <label className="resume-btn">
            Upload Resume
            <input type="file" hidden />
          </label>

        </div>
      </motion.div>

    </div>
  );
}

export default LeftMainProfile;