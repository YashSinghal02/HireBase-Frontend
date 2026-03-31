import "./VerifyEmail.css";
import { IoArrowBack } from "react-icons/io5";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { api } from "../../../Utils/axiosConfig.js";
import { apiTryCatch } from "../../../Utils/trycatch.js";

function VerifyEmail() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
  });

  useEffect(() => {
    if (location.state?.email) {
      setData((prev) => ({
        ...prev,
        email: location.state.email,
      }));
    }
  }, []);

  async function EmailSend(e) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      const response = await apiTryCatch(() =>
        api.post("/forget/verify-email", {
          email: data.email,
        }),
      );

      toast.success(response?.data?.message);

      navigate("/verifyotp", {
        replace: true,
        state: { email: data.email },
      });
    } catch (err) {
      // handled globally
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="verify-email">
      {/* Background glows */}
      <div className="big-circles-email">
        <div className="big-circle1-email"></div>
        <div className="big-circle2-email"></div>
      </div>

      {/* Center glass card */}
      <div className="email-verify-container">
        <div className="glass-card">
          {/* Icon */}
          <div className="email-icon-wrap">
            <div className="email-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="3" />
                <path d="M2 7l10 7 10-7" />
              </svg>
            </div>
          </div>

          <h2>Verify your email</h2>
          <p>
            Enter your email address and we'll send you a verification link.
          </p>

          <form onSubmit={EmailSend}>
            <label htmlFor="email">Email address</label>

            <div className="input-wrap">
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                value={data.email || ""}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="3" />
                <path d="M2 7l10 7 10-7" />
              </svg>
            </div>

            <button type="submit" className="verify-btn" disabled={loading}>
              {loading ? "Sending..." : " Send verification link"}
            </button>
          </form>

          <div className="verify-divider">
            <span />
            <p>or</p>
            <span />
          </div>
          <Link to="/login">
            <button className="back-link">
              {" "}
              <IoArrowBack /> Back to Log in
            </button>
          </Link>
          {/* <a href="/login" className="back-link"> <IoArrowBack /> Back to Log in</a> */}
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
