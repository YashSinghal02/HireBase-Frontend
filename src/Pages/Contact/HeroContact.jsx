import "./HeroContact.css";
import { motion } from "framer-motion";

function HeroContact() {
  return (
    <section className="contact-section">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span className="contact-badge">Get In Touch</span>

        <h2 className="contact-title">
          Let’s talk about your <span>hiring needs</span>
        </h2>

        <p className="contact-text">
          Have questions or need support? The HireBase team is ready to assist
          you. Reach out for hiring solutions, career guidance, or general
          inquiries — we’re here to help you move forward with confidence.
        </p>
      </motion.div>
    </section>
  );
}

export default HeroContact;
