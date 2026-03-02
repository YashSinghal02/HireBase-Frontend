import "./HireBaseFeatures.css";
import {
  FaUserTie,
  FaBell,
  FaRocket,
  FaCogs,
} from "react-icons/fa";
import { RiDashboard2Line } from "react-icons/ri";
import { FaRegCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HireBaseFeatures() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <motion.h2
        className="about-page-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Why Choose <span>HireBase</span>
      </motion.h2>

      <section className="about-features-section">
        <motion.div
          className="about-features-container"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div className="about-features-card" variants={item}>
            <div className="about-features-icon-wrapper">
              <FaUserTie />
            </div>
            <h3>Smart Job Matching</h3>
            <p>
              Our intelligent system connects the right talent with the right
              opportunities based on skills and experience.
            </p>
          </motion.div>

          <motion.div className="about-features-card" variants={item}>
            <div className="about-features-icon-wrapper">
              <FaRegCheckCircle />
            </div>
            <h3>Verified Employers</h3>
            <p>
              We ensure that every listed company is verified to provide a safe
              and trustworthy job environment.
            </p>
          </motion.div>

          <motion.div className="about-features-card" variants={item}>
            <div className="about-features-icon-wrapper">
              <RiDashboard2Line />
            </div>
            <h3>Powerful Dashboard</h3>
            <p>
              Manage applications, interviews, and hiring workflows from a
              centralized modern dashboard.
            </p>
          </motion.div>

          <motion.div className="about-features-card" variants={item}>
            <div className="about-features-icon-wrapper">
              <FaBell />
            </div>
            <h3>Instant Notifications</h3>
            <p>
              Receive real-time alerts for applications, interview schedules,
              and job updates instantly.
            </p>
          </motion.div>

          <motion.div className="about-features-card" variants={item}>
            <div className="about-features-icon-wrapper">
              <FaRocket />
            </div>
            <h3>Faster Hiring</h3>
            <p>
              Reduce hiring time with streamlined processes designed for
              efficiency and speed.
            </p>
          </motion.div>

          <motion.div className="about-features-card" variants={item}>
            <div className="about-features-icon-wrapper">
              <FaCogs />
            </div>
            <h3>Flexible System</h3>
            <p>
              Our platform adapts to startups, small businesses, and
              enterprise-level organizations.
            </p>
          </motion.div>

        </motion.div>
      </section>
    </div>
  );
}