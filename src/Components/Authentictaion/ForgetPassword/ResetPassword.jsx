import "./ResetPassword.css";
import { IoArrowBack } from "react-icons/io5";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { api } from "../../../Utils/axiosConfig.js";
import { apiTryCatch } from "../../../Utils/trycatch.js";

function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();

  const [loading, setLoading] = useState(false);

  // 👁️ Eye toggle states
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (location.state?.email) {
      setData((prev) => ({
        ...prev,
        email: location.state.email,
      }));
    } else {
      navigate("/verifyemail");
    }
  }, [location.state, navigate]);

  async function handleReset(e) {
    e.preventDefault();

    if (!data.password || !data.confirmPassword) {
      return toast.error("All fields required");
    }

    if (data.password !== data.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    if (loading) return;
    setLoading(true);

    try {
      const response = await apiTryCatch(() =>
        api.post("/forget/change-password", {
          email: data.email,
          password: data.password,
        })
      );

      toast.success(response?.data?.message);

      navigate("/login", { replace: true });
    } catch (err) {
      // handled globally
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="reset-password">
      {/* Background */}
      <div className="big-circles-reset">
        <div className="big-circle1-reset"></div>
        <div className="big-circle2-reset"></div>
      </div>

      {/* Card */}
      <div className="reset-password-container">
        <div className="glass-card-reset">
          {/* Icon */}
          <div className="reset-icon-wrap">
            <div className="reset-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                <circle cx="12" cy="16" r="1.2" fill="#3DAA7D" />
              </svg>
            </div>
          </div>

          <h2>Set new password</h2>
          <p>Choose a strong password to keep your account secure.</p>

          <form onSubmit={handleReset}>
            {/* New Password */}
            <div className="reset-field">
              <label>New Password</label>
              <div className="reset-input-wrap">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a new password"
                  autoComplete="new-password"
                  value={data.password}
                  onChange={(e) =>
                    setData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                />

                <button
                  type="button"
                  className="toggle-eye"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible />
                  ) : (
                    <AiOutlineEye />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="reset-field">
              <label>Confirm Password</label>
              <div className="reset-input-wrap">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Re-enter your password"
                  autoComplete="new-password"
                  value={data.confirmPassword}
                  onChange={(e) =>
                    setData((prev) => ({
                      ...prev,
                      confirmPassword: e.target.value,
                    }))
                  }
                />

                <button
                  type="button"
                  className="toggle-eye"
                  onClick={() =>
                    setShowConfirmPassword((prev) => !prev)
                  }
                >
                  {showConfirmPassword ? (
                    <AiOutlineEyeInvisible />
                  ) : (
                    <AiOutlineEye />
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button type="submit" className="reset-btn" disabled={loading}>
              {loading ? "Resetting..." : "Reset password"}
            </button>
          </form>

          <div className="reset-divider">
            <span />
            <p>or</p>
            <span />
          </div>

          <Link to="/login">
            <button className="back-link">
              <IoArrowBack /> Back to Log in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;