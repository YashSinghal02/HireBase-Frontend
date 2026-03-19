import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { apiTryCatch } from "@/Utils/trycatch";
import { api } from "@/Utils/axiosConfig";
import toast from "react-hot-toast";

function EditJobForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [responsibilityInput, setResponsibilityInput] = useState("");
  const [responsibilities, setResponsibilities] = useState([]);

  const [qualificationInput, setQualificationInput] = useState("");
  const [qualifications, setQualifications] = useState([]);

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

  const [existingLogo, setExistingLogo] = useState(null);
  const [loading, setLoading] = useState(false);

  // ================= FETCH =================
  useEffect(() => {
    const fetchJob = async () => {
      await apiTryCatch(async () => {
        const response = await api.get(`/employer/jobs/${id}`);
        const job = response.data.data;

        setData({
          companyName: job.companyName || "",
          jobTitle: job.jobTitle || "",
          salary: job.salary || "",
          location: job.location || "",
          jobType: job.jobType || "",
          experienceLevel: job.experienceLevel || "",
          positions: job.positions || "",
          description: job.description || "",
          logo: null,
        });

        setResponsibilities(job.responsibilities || []);
        setQualifications(job.qualifications || []);
        setSkills(job.skills || []);
        setExistingLogo(job.logo || null);
      });
    };

    fetchJob();
  }, [id]);

  // ================= TAG HANDLERS =================
  const addResponsibility = () => {
    if (!responsibilityInput.trim()) return;
    setResponsibilities([...responsibilities, responsibilityInput]);
    setResponsibilityInput("");
  };

  const deleteResponsibility = (index) =>
    setResponsibilities(responsibilities.filter((_, i) => i !== index));

  const addQualification = () => {
    if (!qualificationInput.trim()) return;
    setQualifications([...qualifications, qualificationInput]);
    setQualificationInput("");
  };

  const deleteQualification = (index) =>
    setQualifications(qualifications.filter((_, i) => i !== index));

  const addSkill = () => {
    if (!skillInput.trim()) return;
    setSkills([...skills, skillInput]);
    setSkillInput("");
  };

  const deleteSkill = (index) =>
    setSkills(skills.filter((_, i) => i !== index));

  // ================= SUBMIT =================
  const SubmitForm = async (e) => {
    e.preventDefault();

    if (loading) return;

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
      const formData = new FormData();

      formData.append("companyName", data.companyName);
      formData.append("jobTitle", data.jobTitle);
      formData.append("salary", data.salary);
      formData.append("location", data.location);
      formData.append("jobType", data.jobType);
      formData.append("experienceLevel", data.experienceLevel);
      formData.append("positions", data.positions);
      formData.append("description", data.description);

      responsibilities.forEach((item) =>
        formData.append("responsibilities", item)
      );
      qualifications.forEach((item) =>
        formData.append("qualifications", item)
      );
      skills.forEach((item) => formData.append("skills", item));

      if (data.logo) {
        formData.append("logo", data.logo);
      }

      const response = await api.put(`/employer/jobs/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success(response?.data?.message);
      navigate("/dashboard/jobscreated");

    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div className="jobform-wrapper">
      <div className="jobform-card">
        <div className="jobform-header">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <FaArrowLeft /> Back
          </button>
          <h2>Edit Job</h2>
        </div>

        <form className="jobform-form" onSubmit={SubmitForm}>
          
          {/* Company */}
          <div className="form-group">
            <label>Company Name *</label>
            <input
              type="text"
              value={data.companyName}
              onChange={(e) => setData({ ...data, companyName: e.target.value })}
            />
          </div>

          {/* Job Title */}
          <div className="form-group">
            <label>Job Title *</label>
            <input
              type="text"
              value={data.jobTitle}
              onChange={(e) => setData({ ...data, jobTitle: e.target.value })}
            />
          </div>

          {/* Salary */}
          <div className="form-group">
            <label>Salary *</label>
            <input
              type="text"
              value={data.salary}
              onChange={(e) => setData({ ...data, salary: e.target.value })}
            />
          </div>

          {/* Location */}
          <div className="form-group">
            <label>Location *</label>
            <input
              type="text"
              value={data.location}
              onChange={(e) => setData({ ...data, location: e.target.value })}
            />
          </div>

          {/* Job Type */}
          <div className="form-group">
            <label>Job Type *</label>
            <select
              value={data.jobType}
              onChange={(e) => setData({ ...data, jobType: e.target.value })}
            >
              <option value="">-- Select Job Type --</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Internship">Internship</option>
              <option value="Remote">Remote</option>
            </select>
          </div>

          {/* Experience */}
          <div className="form-group">
            <label>Experience Level *</label>
            <select
              value={data.experienceLevel}
              onChange={(e) =>
                setData({ ...data, experienceLevel: e.target.value })
              }
            >
              <option value="">-- Select Experience Level --</option>
              <option value="Junior">Junior</option>
              <option value="Mid Level">Mid Level</option>
              <option value="Senior">Senior</option>
            </select>
          </div>

          {/* Positions */}
          <div className="form-group">
            <label>No. of Positions *</label>
            <input
              type="number"
              value={data.positions}
              onChange={(e) => setData({ ...data, positions: e.target.value })}
            />
          </div>

          {/* Logo */}
          <div className="form-group">
            <label>Logo</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setData({ ...data, logo: e.target.files[0] })
              }
            />

            {existingLogo && !data.logo && (
              <img src={existingLogo}  style={{ width: "80px", marginTop: "10px", borderRadius: "6px" }} />
            )}

            {data.logo && (
              <img
                src={URL.createObjectURL(data.logo)}
                style={{ width: "100px" }}
              />
            )}
          </div>

          {/* Description */}
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
            {loading ? "Updating..." : "Update Job"}
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default EditJobForm;