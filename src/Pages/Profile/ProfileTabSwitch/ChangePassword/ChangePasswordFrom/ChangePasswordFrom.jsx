import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./ChangePasswordFrom.css";
import { motion } from "framer-motion";
import { apiTryCatch } from "@/Utils/trycatch";
import { api } from "@/Utils/axiosConfig";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import './ChangePasswordFrom.css'

function ChangePasswordFrom({ setActiveTab, setRefreshProfile }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [loading, setLoading] = useState(false);

  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [data, setData] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });



async function handleReset(e) {
  e.preventDefault();

  if (!data.newPassword || !data.confirmPassword) {
    return toast.error("All fields required");
  }

  if (data.newPassword !== data.confirmPassword) {
    return toast.error("Passwords do not match");
  }

  if (loading) return;
  setLoading(true);

  try {
    const response = await apiTryCatch(() =>
      api.post("/user/change-password", {
        newPassword: data.newPassword,
      })
    );

    toast.success(response?.data?.message);

    setData({
  email: "",
  newPassword: "",
  confirmPassword: "",
});


    // Option 1 (stay on profile)
    setRefreshProfile((prev) => !prev);
    setActiveTab("MainProfile");

    // Option 2 (recommended security)
    // localStorage.removeItem("token");
    // navigate("/login");

  } catch (err) {
    // handled globally
  } finally {
    setLoading(false);
  }
}

  return (
    <motion.div className="edit-profile-form-container">
  <form onSubmit={handleReset}>
    <h2 className="edit-profile-form-title">Change Password</h2>

    {/* ✅ GRID WRAPPER */}
    <div className="edit-profile-form-grid">

      {/* NEW PASSWORD */}
      <div className="edit-profile-form-field">
        <label>New Password</label>
        <div className="input-wrapper">
          <input
            type={showNew ? "text" : "password"}
            value={data.newPassword}
            onChange={(e) =>
              setData({ ...data, newPassword: e.target.value })
            }
            placeholder="Enter new password"
          />
          <span onClick={() => setShowNew(!showNew)}>
            {showNew ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
      </div>

      {/* CONFIRM PASSWORD */}
      <div className="edit-profile-form-field">
        <label>Confirm Password</label>
        <div className="input-wrapper">
          <input
            type={showConfirm ? "text" : "password"}
            value={data.confirmPassword}
            onChange={(e) =>
              setData({ ...data, confirmPassword: e.target.value })
            }
            placeholder="Confirm new password"
          />
          <span onClick={() => setShowConfirm(!showConfirm)}>
            {showConfirm ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
      </div>

    </div>

    <button disabled={loading}>
      {loading ? "Updating..." : "Update Password"}
    </button>
  </form>
</motion.div>
  );
}

export default ChangePasswordFrom;