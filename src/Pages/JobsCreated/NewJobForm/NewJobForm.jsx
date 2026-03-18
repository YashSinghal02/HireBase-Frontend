import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./NewJobForm.css";
import { motion } from "framer-motion";
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

  // Logo file
  const [logoFile, setLogoFile] = useState(null);

  const [data, setData] = useState({
    companyName: "",
    jobTitle: "",
    salary: "",
    location: "",
    jobType: "",
    experienceLevel: "",
    positions: "",
    description: "",
    logo: "",
  });

  const [loading, setLoading] = useState(false);

  // ================= RESPONSIBILITY =================
  function addResponsibility() {
    if (!responsibilityInput.trim()) return;
    setResponsibilities([...responsibilities, responsibilityInput]);
    setResponsibilityInput("");
  }

  function deleteResponsibility(index) {
    setResponsibilities(responsibilities.filter((_, i) => i !== index));
  }

  // ================= QUALIFICATION =================
  function addQualification() {
    if (!qualificationInput.trim()) return;
    setQualifications([...qualifications, qualificationInput]);
    setQualificationInput("");
  }

  function deleteQualification(index) {
    setQualifications(qualifications.filter((_, i) => i !== index));
  }

  // ================= SKILLS =================
  function addSkill() {
    if (!skillInput.trim()) return;
    setSkills([...skills, skillInput]);
    setSkillInput("");
  }

  function deleteSkill(index) {
    setSkills(skills.filter((_, i) => i !== index));
  }

  // ================= LOGO =================
  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setLogoFile(file);
  };

  // ================= SUBMIT =================
  async function SubmitForm(e) {
    e.preventDefault();

    if (loading) return;

    // ✅ Validation first
    if (
      !data.companyName ||
      !data.jobTitle ||
      !data.salary ||
      !data.location ||
      !data.jobType ||
      !data.experienceLevel ||
      !data.positions ||
      !data.description
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    setLoading(true);

    try {
      let logoUrl = "";

      // ✅ Upload logo AFTER validation
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
        responsibilities,
        qualifications,
        skills,
      };

      const response = await api.post(`/employer/jobs/${userId}`, payload);

      toast.success(response?.data?.message);
      navigate("/dashboard/jobscreated");

    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
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
            <label>Company Name *</label>
            <input
              type="text"
              placeholder="e.g. Google"
              value={data.companyName}
              onChange={(e) =>
                setData({ ...data, companyName: e.target.value })
              }
            />
          </motion.div>

          {/* Job Title */}
          <motion.div className="form-group">
            <label>Job Title *</label>
            <input
              type="text"
              placeholder="e.g. Full Stack Developer"
              value={data.jobTitle}
              onChange={(e) =>
                setData({ ...data, jobTitle: e.target.value })
              }
            />
          </motion.div>

          {/* Salary */}
          <motion.div className="form-group">
            <label>Salary *</label>
            <input
              type="text"
              placeholder="e.g. 4-5 LPA"
              value={data.salary}
              onChange={(e) => setData({ ...data, salary: e.target.value })}
            />
          </motion.div>

          {/* Location */}
          <motion.div className="form-group">
            <label>Location *</label>
            <input
              type="text"
              placeholder="e.g. Bangalore"
              value={data.location}
              onChange={(e) => setData({ ...data, location: e.target.value })}
            />
          </motion.div>

          {/* Job Type */}
          <motion.div className="form-group">
            <label>Job Type *</label>
            <select
              value={data.jobType}
              onChange={(e) => setData({ ...data, jobType: e.target.value })}
            >
              <option value="">Select</option>
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Internship</option>
              <option>Remote</option>
            </select>
          </motion.div>

          {/* Experience */}
          <motion.div className="form-group">
            <label>Experience Level *</label>
            <select
              value={data.experienceLevel}
              onChange={(e) =>
                setData({ ...data, experienceLevel: e.target.value })
              }
            >
              <option value="">Select</option>
              <option>Junior</option>
              <option>Mid Level</option>
              <option>Senior</option>
            </select>
          </motion.div>

          {/* Positions */}
          <motion.div className="form-group">
            <label>No. of Positions *</label>
            <input
              type="number"
              value={data.positions}
              onChange={(e) =>
                setData({ ...data, positions: e.target.value })
              }
            />
          </motion.div>

          {/* Logo */}
          <motion.div className="form-group">
            <label>Company Logo</label>
            <input type="file" accept="image/*" onChange={handleLogoUpload} />

            {logoFile && (
              <img
                src={URL.createObjectURL(logoFile)}
                alt="preview"
                style={{ width: "80px", marginTop: "10px", borderRadius: "6px" }}
              />
            )}
          </motion.div>

          {/* Job Description */}
          <motion.div className="form-group full-width">
            <label>Job Description *</label>
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
                placeholder="Add responsibility"
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
                placeholder="Add qualification"
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
                placeholder="Add skill"
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

          <button className="post-btn" disabled={loading}>
            {loading ? "Posting..." : "Post New Job"}
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default NewJobForm;