import "./HeroAbout.css";
import { motion } from "framer-motion";

function HeroAbout() {
  return (
    <section className="about-section">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="about-badge">Who We Are</span>

        <h2 className="about-title">
          Building the future of <span>smart hiring</span>
        </h2>

        <p className="main-text">
          HireBase is a modern hiring platform designed to connect skilled
          professionals with trusted employers in a faster, smarter, and more
          transparent way. We empower companies to discover the right talent
          efficiently while helping job seekers access meaningful opportunities,
          build careers, and grow with confidence in a competitive job market.
        </p>
      </motion.div>
    </section>
  );
}

export default HeroAbout;
