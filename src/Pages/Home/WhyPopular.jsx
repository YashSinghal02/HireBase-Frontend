import "./WhyPopular.css";
import { FaBriefcase, FaBuilding, FaGlobe, FaShieldAlt } from "react-icons/fa";
import why1 from '../../assets/why1.avif'
import why2 from '../../assets/why2.avif'
import why3 from '../../assets/why3.avif'
import { motion } from "framer-motion";


export default function WhyPopular() {
  return (
    <section className="why-section">
      <div className="why-container">

        {/* LEFT IMAGES */}
        <motion.div className="why-images"
        initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
          <img
            src={why1}
            alt="person"
            className="big-img"
          />
          <div className="small-images">
            <img
              src={why2}
              alt="team"
            />
            <img
              src={why3}
              alt="office"
            />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div className="why-content"
        initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
          <h2>
            Why We Are <span>Most Popular</span>
          </h2>

          <p className="why-desc">
            HireBase connects talent with opportunity through smart
            technology, trusted employers, and a seamless hiring experience.
          </p>

          <motion.div 
          className="why-features"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}>
            <div className="why-feature">
              <FaBriefcase />
              <span>Trusted & Quality Jobs</span>
            </div>

            <div className="why-feature">
              <FaBuilding />
              <span>Top Verified Companies</span>
            </div>

            <div className="why-feature">
              <FaShieldAlt />
              <span>No Extra Charges</span>
            </div>

            <div className="why-feature">
              <FaGlobe />
              <span>International Opportunities</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}