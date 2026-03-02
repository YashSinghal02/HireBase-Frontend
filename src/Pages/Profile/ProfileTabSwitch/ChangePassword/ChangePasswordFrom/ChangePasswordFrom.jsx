import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./ChangePasswordFrom.css";
import { motion } from "framer-motion";


function ChangePasswordFrom() {

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <motion.div className="edit-profile-form-container"
    initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >

      {/* ================= Profile Settings Section ================= */}
      <form className="edit-profile-form-section">

        <h2 className="edit-profile-form-title">
          Change password
        </h2>

        <div className="edit-profile-form-grid">

          {/* ================= New Password ================= */}
          <motion.div className="edit-profile-form-field"
          initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <label>New Password</label>

            <div className="edit-profile-form-input-wrapper">
              <input
                type={showNewPassword ? "text" : "password"}
                placeholder="Enter new password"
              />

              <span
                className="edit-profile-form-eye"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </motion.div>

          {/* ================= Confirm Password ================= */}
          <motion.div className="edit-profile-form-field"
          initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <label>Confirm New Password</label>

            <div className="edit-profile-form-input-wrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm new password"
              />

              <span
                className="edit-profile-form-eye"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </motion.div>

        </div>

        <button type="submit" className="edit-profile-form-button">
          Update Password
        </button>

      </form>

    </motion.div>
  );
}

export default ChangePasswordFrom;