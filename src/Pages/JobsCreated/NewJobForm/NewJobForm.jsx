import { useContext, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./NewJobForm.css";
import { motion } from "framer-motion";
import { apiTryCatch } from "@/Utils/trycatch";
import { api } from "@/Utils/axiosConfig";
import toast from "react-hot-toast";
import { AuthContext } from "@/AuthContext/AuthContext";


function NewJobForm() {
   const { userId } = useContext(AuthContext);
  const navigate = useNavigate();

  // Responsibility state
  const [responsibilityInput, setResponsibilityInput] = useState("");
  const [responsibilities, setResponsibilities] = useState([]);

  // Qualification state
  const [qualificationInput, setQualificationInput] = useState("");
  const [qualifications, setQualifications] = useState([]);

  // Skills state
  const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState([]);

  const [data, setData] = useState({
    companyName: "",
    jobTitle: "",
    salary: "",
    location: "",
    jobType: "",
    experienceLevel: "",
    positions: "",
    description: "",
    logo: null,
  });

  // Add Responsibility
  function addResponsibility() {
    if (!responsibilityInput.trim()) return;

    setResponsibilities([...responsibilities, responsibilityInput]);
    setResponsibilityInput("");
  }

  function deleteResponsibility(index) {
    setResponsibilities(responsibilities.filter((_, i) => i !== index));
  }

  // Add Qualification
  function addQualification() {
    if (!qualificationInput.trim()) return;

    setQualifications([...qualifications, qualificationInput]);
    setQualificationInput("");
  }

  function deleteQualification(index) {
    setQualifications(qualifications.filter((_, i) => i !== index));
  }

  // Add Skill
  function addSkill() {
    if (!skillInput.trim()) return;

    setSkills([...skills, skillInput]);
    setSkillInput("");
  }

  function deleteSkill(index) {
    setSkills(skills.filter((_, i) => i !== index));
  }

  async function SubmitForm(e) {
    e.preventDefault();

    await apiTryCatch(async () => {
      const payload = {
        ...data,
        responsibilities,
        qualifications,
        skills,
      };

      const response = await api.post(`/employer/jobs/${userId}`, payload);

      toast.success(response?.data?.message);

      navigate("/dashboard/jobscreated");
    });
  }

  return (
    <motion.div
      className="jobform-wrapper"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="jobform-card">
        <div className="jobform-header">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <FaArrowLeft /> Back
          </button>
          <h2>Create New Job</h2>
        </div>

        <form className="jobform-form" onSubmit={SubmitForm}>
          {/* Company Name */}
          <motion.div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              value={data.companyName}
              onChange={(e) =>
                setData({ ...data, companyName: e.target.value })
              }
            />
          </motion.div>

          {/* Job Title */}
          <motion.div className="form-group">
            <label>Job Title</label>
            <input
              type="text"
              value={data.jobTitle}
              onChange={(e) => setData({ ...data, jobTitle: e.target.value })}
            />
          </motion.div>

          {/* Salary */}
          <motion.div className="form-group">
            <label>Salary</label>
            <input
              type="text"
              value={data.salary}
              onChange={(e) => setData({ ...data, salary: e.target.value })}
            />
          </motion.div>

          {/* Location */}
          <motion.div className="form-group">
            <label>Location</label>
            <input
              type="text"
              value={data.location}
              onChange={(e) => setData({ ...data, location: e.target.value })}
            />
          </motion.div>

          {/* Job Type */}
          <motion.div className="form-group">
            <label>Job Type</label>
            <select
              value={data.jobType}
              onChange={(e) => setData({ ...data, jobType: e.target.value })}
            >
              <option value="">-- Select --</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Internship">Internship</option>
              <option value="Remote">Remote</option>
            </select>
          </motion.div>

          {/* Experience */}
          <motion.div className="form-group">
            <label>Experience Level</label>
            <select
              value={data.experienceLevel}
              onChange={(e) =>
                setData({ ...data, experienceLevel: e.target.value })
              }
            >
              <option value="">-- Select --</option>
              <option value="Junior">Junior</option>
              <option value="Mid Level">Mid Level</option>
              <option value="Senior">Senior</option>
            </select>
          </motion.div>

          {/* Positions */}
          <motion.div className="form-group">
            <label>No. of Positions</label>
            <input
              type="number"
              value={data.positions}
              onChange={(e) => setData({ ...data, positions: e.target.value })}
            />
          </motion.div>

          {/* Logo */}
          <motion.div className="form-group">
            <label>Logo</label>
            <input
              type="file"
              onChange={(e) => setData({ ...data, logo: e.target.files[0] })}
            />
          </motion.div>

          {/* Job Description */}
          <motion.div className="form-group full-width">
            <label>Job Description</label>
            <textarea
              value={data.description}
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
            />
          </motion.div>

          {/* Responsibilities */}
          <motion.div className="form-group full-width">
            <label>Responsibilities</label>

            <div className="tag-input">
              <input
                value={responsibilityInput}
                onChange={(e) => setResponsibilityInput(e.target.value)}
                placeholder="Type responsibility and press Add"
              />
              <button type="button" onClick={addResponsibility}>
                Add
              </button>
            </div>

            <div className="tag-container-job-form">
              {responsibilities.map((item, index) => (
                <div key={index} className="tag-job-form">
                  {item}
                  <span onClick={() => deleteResponsibility(index)}>✕</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Qualifications */}
          <motion.div className="form-group full-width">
            <label>Qualifications</label>

            <div className="tag-input">
              <input
                value={qualificationInput}
                onChange={(e) => setQualificationInput(e.target.value)}
                placeholder="Type qualification and press Add"
              />
              <button type="button" onClick={addQualification}>
                Add
              </button>
            </div>

            <div className="tag-container-job-form">
              {qualifications.map((item, index) => (
                <div key={index} className="tag-job-form">
                  {item}
                  <span onClick={() => deleteQualification(index)}>✕</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div className="form-group full-width">
            <label>Skills</label>

            <div className="tag-input">
              <input
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                placeholder="Type skill and press Add"
              />
              <button type="button" onClick={addSkill}>
                Add
              </button>
            </div>

            <div className="tag-container-job-form-skills">
              {skills.map((item, index) => (
                <div key={index} className="tag-job-form-skills">
                  {item}
                  <span onClick={() => deleteSkill(index)}>✕</span>
                </div>
              ))}
            </div>
          </motion.div>

          <button className="post-btn">Post New Job</button>
        </form>
      </div>
    </motion.div>
  );
}

export default NewJobForm;
