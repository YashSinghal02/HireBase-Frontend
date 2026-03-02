import "./ResetPassword.css";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

function ResetPassword() {
  return (
    <div className="reset-password">
      {/* Background glows */}
      <div className="big-circles-reset">
        <div className="big-circle1-reset"></div>
        <div className="big-circle2-reset"></div>
      </div>

      {/* Center glass card */}
      <div className="reset-password-container">
        <div className="glass-card-reset">

          {/* Icon */}
          <div className="reset-icon-wrap">
            <div className="reset-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                <circle cx="12" cy="16" r="1.2" fill="#3DAA7D" stroke="none" />
              </svg>
            </div>
          </div>

          <h2>Set new password</h2>
          <p>Choose a strong password to keep your account secure.</p>

          <form>

            {/* New Password */}
            <div className="reset-field">
              <label htmlFor="new-password">New Password</label>
              <div className="reset-input-wrap">
                <svg className="input-icon-left" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <input
                  id="new-password"
                  type="password"
                  placeholder="Create a new password"
                  autoComplete="new-password"
                />
                <button type="button" className="toggle-eye" aria-label="Toggle password visibility">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="reset-field">
              <label htmlFor="confirm-password">Confirm Password</label>
              <div className="reset-input-wrap">
                <svg className="input-icon-left" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <input
                  id="confirm-password"
                  type="password"
                  placeholder="Re-enter your password"
                  autoComplete="new-password"
                />
                <button type="button" className="toggle-eye" aria-label="Toggle confirm password visibility">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
              </div>
            </div>

            <button type="submit" className="reset-btn">
              Reset password
            </button>
          </form>

          <div className="reset-divider">
            <span />
            <p>or</p>
            <span />
          </div>

          <Link to="/login"><button className="back-link"> <IoArrowBack />  Back to Log in</button></Link>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;