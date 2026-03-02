import "./VerifyEmail.css";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";


function VerifyEmail() {
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
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="3" />
                <path d="M2 7l10 7 10-7" />
              </svg>
            </div>
          </div>

          <h2>Verify your email</h2>
          <p>Enter your email address and we'll send you a verification link.</p>

          <form>
            <label htmlFor="email">Email address</label>

            <div className="input-wrap">
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
              />
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="3" />
                <path d="M2 7l10 7 10-7" />
              </svg>
            </div>

            <button type="submit" className="verify-btn">
              Send verification link
            </button>
          </form>

          <div className="verify-divider">
            <span />
            <p>or</p>
            <span />
          </div>
         <Link to="/login"><button className="back-link"> <IoArrowBack />  Back to Log in</button></Link>
          {/* <a href="/login" className="back-link"> <IoArrowBack /> Back to Log in</a> */}
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;