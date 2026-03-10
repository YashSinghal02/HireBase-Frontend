import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Unauthorized.css";

function Unauthorized() {
  const navigate = useNavigate();

  return (
    <div className="unauth-wrapper">
      <motion.div
        className="unauth-box"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="code">403</h1>

        <h2>Access Restricted</h2>

        <p>
          You don't have permission to view this page.
          Please return to your dashboard or contact admin.
        </p>

        <div className="btn-group">
          <button className="back-btn" onClick={() => navigate(-1)}>
            Go Back
          </button>

          <button
            className="dash-btn"
            onClick={() => navigate("/dashboard")}
          >
            Go to Dashboard
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default Unauthorized;