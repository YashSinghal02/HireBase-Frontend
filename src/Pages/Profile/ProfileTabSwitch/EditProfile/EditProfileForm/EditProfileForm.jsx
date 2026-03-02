import "./EditProfileForm.css";
import { motion } from "framer-motion";

function EditProfileForm() {
  return (
    <motion.div
      className="edit-profile-form-container"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {/* ================= Personal Details Form ================= */}
      <form className="edit-profile-form-section">
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
            <label>Full Name</label>
            <input type="text" name="fullName" placeholder="Enter full name" />
          </motion.div>

          <motion.div
            className="edit-profile-form-field"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <label>Age</label>
            <input type="number" name="age" placeholder="Enter age" />
          </motion.div>

          <motion.div
            className="edit-profile-form-field"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <label>Address</label>
            <input type="text" name="address" placeholder="Enter address" />
          </motion.div>

          <motion.div
            className="edit-profile-form-field"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <label>Country</label>
            <input type="text" name="country" placeholder="Enter country" />
          </motion.div>

          <motion.div
            className="edit-profile-form-field"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <label>City</label>
            <input type="text" name="city" placeholder="Enter city" />
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
            <label>Occupation</label>
            <input
              type="text"
              name="occupation"
              placeholder="Enter occupation"
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
          <label>About</label>
          <textarea
            name="about"
            rows="5"
            placeholder="Write about yourself"
          ></textarea>
        </motion.div>

        {/* Submit */}
        <button type="submit" className="edit-profile-form-button">
          Update Profile
        </button>
      </form>

      {/* ================= Social Networks Form ================= */}
      <form className="edit-profile-form-section">
        <h2 className="edit-profile-form-title">Social Networks</h2>

        <div className="edit-profile-form-grid">
          <motion.div
            className="edit-profile-form-field"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <label>LinkedIn</label>
            <input
              type="text"
              name="linkedin"
              placeholder="LinkedIn profile link"
            />
          </motion.div>

          <motion.div
            className="edit-profile-form-field"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <label>GitHub</label>
            <input
              type="text"
              name="github"
              placeholder="GitHub profile link"
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
            />
          </motion.div>
        </div>

        <button type="submit" className="edit-profile-form-button">
          Update Social
        </button>
      </form>

      {/* ================= Skills Form ================= */}
      <form className="edit-profile-form-section">
        <h2 className="edit-profile-form-title">Skills</h2>

        <motion.div
          className="edit-profile-form-field edit-profile-form-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <label>Skills</label>
          <textarea
            name="skills"
            rows="4"
            placeholder="HTML, CSS, React, Node..."
          ></textarea>
        </motion.div>

        <button type="submit" className="edit-profile-form-button">
          Update Skills
        </button>
      </form>
    </motion.div>
  );
}

export default EditProfileForm;
