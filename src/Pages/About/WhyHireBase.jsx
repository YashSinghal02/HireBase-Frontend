import "./WhyHireBase.css";
import aobutwhy from "../../assets/aobutwhy.png";
import { motion } from "framer-motion";

export default function WhyHireBase() {
  return (
    <section className="why-section">
      <div className="why-container">
        {/* Left Image */}
        <motion.div
          className="why-image"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src={aobutwhy} alt="Why HireBase" />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="why-content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="why-title">Why HireBase Works for Everyone</p>

          <h2 className="why-heading">
            A smarter way to hire <br /> and get hired
          </h2>

          <p className="why-text">
            HireBase simplifies the hiring journey for both employers and job
            seekers by focusing on efficiency, transparency, and skill-based
            matching — ensuring every connection creates real value.
          </p>

          <p className="why-text">
            Employers discover verified candidates faster, while professionals
            gain access to genuine opportunities aligned with their skills,
            goals, and experience all in one seamless platform.
          </p>

          <button className="why-learn-btn">Learn More</button>
        </motion.div>
      </div>
    </section>
  );
}
