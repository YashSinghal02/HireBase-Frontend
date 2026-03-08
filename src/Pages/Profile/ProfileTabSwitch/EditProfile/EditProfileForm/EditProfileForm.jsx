import { api } from "@/Utils/axiosConfig";
import "./EditProfileForm.css";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { apiTryCatch } from "@/Utils/trycatch";
import { useState } from "react";
import { useEffect } from "react";

function EditProfileForm({ setActiveTab, setRefreshProfile }) {
const [educationInput, setEducationInput] = useState("");
  const [education, setEducation] = useState([]);

  // Skills state
  const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState([]);

  const [data, setData] = useState({
    name: "",
    age: "",
    address: "",
    country: "",
    city: "",
    about: "",
    // education:"",
    occupation: "",
    linkedIn: "",
    gitHub: "",
    facebook: "",
    instagram: "",
    // profilePicture:"",
    resume: "",
  });


  // Add Education
  function addEducation() {
    if (!educationInput.trim()) return;

    setEducation([...education, educationInput]);
    setEducationInput("");
  }

  function deleteEducation(index) {
    setEducation(education.filter((_, i) => i !== index));
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
        education,
        skills,
      };

      const response = await api.post("/profile", payload);

      toast.success(response?.data?.message);
      // refresh profile
      setRefreshProfile((prev) => !prev);

      // switch tab
      setActiveTab("MainProfile");
    });
  }

  async function getProfile() {
  await apiTryCatch(async () => {
    const response = await api.get("/profile");

    const profile = response?.data?.data;
    console.log("getProfile Data:",profile)

    if (profile) {
      setData({
        
        name: profile.name || "",
        age: profile.age || "",
        address: profile.address || "",
        country: profile.country || "",
        city: profile.city || "",
        about: profile.about || "",
        occupation: profile.occupation || "",
        linkedIn: profile.linkedIn || "",
        gitHub: profile.gitHub || "",
        facebook: profile.facebook || "",
        instagram: profile.instagram || "",
        resume: profile.resume || ""
      });
      
      setEducation(profile.education || []);
      setSkills(profile.skills || []);

    }
  });
}

useEffect(() => {
  getProfile();
}, []);

  return (
    <motion.div
      className="edit-profile-form-container"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {/* ================= Personal Details Form ================= */}
      <form className="edit-profile-form-section" onSubmit={SubmitForm}>
        {/* Section Title */}
        <h2 className="edit-profile-form-title">Personal Details</h2>

        {/* Grid Fields */}
        <div className="edit-profile-form-grid">
          <motion.div
            className="edit-profile-form-field"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter full name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </motion.div>

          <motion.div
            className="edit-profile-form-field"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              placeholder="Enter age"
              value={data.age}
              onChange={(e) => setData({ ...data, age: e.target.value })}
            />
          </motion.div>

          <motion.div
            className="edit-profile-form-field"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter address"
              value={data.address}
              onChange={(e) => setData({ ...data, address: e.target.value })}
            />
          </motion.div>

          <motion.div
            className="edit-profile-form-field"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              placeholder="Enter country"
              value={data.country}
              onChange={(e) => setData({ ...data, country: e.target.value })}
            />
          </motion.div>

          <motion.div
            className="edit-profile-form-field"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              placeholder="Enter city"
              value={data.city}
              onChange={(e) => setData({ ...data, city: e.target.value })}
            />
          </motion.div>

          <motion.div
            className="edit-profile-form-field"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <label>Mobile No</label>
            <input
              type="text"
              name="mobile"
              placeholder="Enter mobile number"
            />
          </motion.div>

          <motion.div
            className="edit-profile-form-field"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter email" />
          </motion.div>

          <motion.div
            className="edit-profile-form-field"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <label htmlFor="occupation">Occupation</label>
            <input
              type="text"
              name="occupation"
              placeholder="Enter occupation"
              value={data.occupation}
              onChange={(e) => setData({ ...data, occupation: e.target.value })}
            />
          </motion.div>
        </div>

        {/* About Field */}
        <motion.div
          className="edit-profile-form-field edit-profile-form-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <label htmlFor="about">About</label>
          <textarea
            name="about"
            rows="5"
            placeholder="Write about yourself"
            value={data.about}
            onChange={(e) => setData({ ...data, about: e.target.value })}
          ></textarea>
        </motion.div>

       
        {/* ================= Education Form ================= */}
        <div className="edit-profile-form-section">
          <h2 className="edit-profile-form-title">Education</h2>

          <motion.div
            className="edit-profile-form-field edit-profile-form-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <label>Education</label>
            <div className="tag-input">
              <input
                value={educationInput}
                onChange={(e) => setEducationInput(e.target.value)}
                placeholder="Type Education and press Add"
              />
              <button type="button" onClick={addEducation}>
                Add
              </button>
            </div>

            <div className="tag-container-job-form">
              {education.map((item, index) => (
                <div key={index} className="tag-job-form">
                  {item}
                  <span onClick={() => deleteEducation(index)}>✕</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>


        {/* ================= Social Networks Form ================= */}
        <div className="edit-profile-form-section">
          <h2 className="edit-profile-form-title">Social Networks</h2>

          <div className="edit-profile-form-grid">
            <motion.div
              className="edit-profile-form-field"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <label htmlFor="linkedIn">LinkedIn</label>
              <input
                type="text"
                name="linkedin"
                placeholder="LinkedIn profile link"
                value={data.linkedIn}
                onChange={(e) => setData({ ...data, linkedIn: e.target.value })}
              />
            </motion.div>

            <motion.div
              className="edit-profile-form-field"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <label htmlFor="gitHub">GitHub</label>
              <input
                type="text"
                name="github"
                placeholder="GitHub profile link"
                value={data.gitHub}
                onChange={(e) => setData({ ...data, gitHub: e.target.value })}
              />
            </motion.div>

            <motion.div
              className="edit-profile-form-field"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <label>Instagram</label>
              <input
                type="text"
                name="instagram"
                placeholder="Instagram profile link"
                value={data.instagram}
                onChange={(e) =>
                  setData({ ...data, instagram: e.target.value })
                }
              />
            </motion.div>

            <motion.div
              className="edit-profile-form-field"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <label>Facebook</label>
              <input
                type="text"
                name="facebook"
                placeholder="Facebook profile link"
                value={data.facebook}
                onChange={(e) => setData({ ...data, facebook: e.target.value })}
              />
            </motion.div>
          </div>
        </div>

        {/* ================= Skills Form ================= */}
        <div className="edit-profile-form-section">
          <h2 className="edit-profile-form-title">Skills</h2>

          <motion.div
            className="edit-profile-form-field edit-profile-form-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
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
        </div>

        {/* Submit */}
        <button type="submit" className="edit-profile-form-button">
          Update Profile
        </button>
      </form>
    </motion.div>
  );
}

export default EditProfileForm;
