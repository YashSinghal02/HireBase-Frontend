import "./LeftMainProfile.css";
import { motion } from "framer-motion";


function LeftMainProfile() {
  return (
    <div className="left-main-profile">

      {/* About */}
      <motion.div className="left-main-section about"
      initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}
      >
        <h2 className="left-main-title">About</h2>
        <div className="left-main-card">
          <p>
            Passionate frontend developer focused on building modern,
            responsive and user-friendly web applications. I enjoy creating
            clean UI designs and smooth user experiences using React and modern
            CSS.
          </p>
        </div>
      </motion.div>

      {/* Education */}
      <motion.div className="left-main-section education"
      initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
      >
        <h2 className="left-main-title">Education</h2>
        <div className="left-main-card">
          <h3>GRD Institute of Technology</h3>
          <h4>Bachelor of Computer Applications (BCA)</h4>
          <h5>2021 - 2024</h5>
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div className="left-main-section skills"
      initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
      >
        <h2 className="left-main-title">Skills</h2>
        <div className="left-main-card skills-wrapper">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Tailwind</span>
        </div>
      </motion.div>

      {/* Resume */}
      <motion.div className="left-main-section resume"
      initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
      >
        <h2 className="left-main-title">Resume</h2>
        <div className="left-main-card resume-wrapper">
          <span className="resume-text">No resume uploaded</span>

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