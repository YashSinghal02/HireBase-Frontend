import "./FilterJobs.css";
import { motion } from "framer-motion";

function FilterJobs() {
  return (
    <div className="filter-container">
      <motion.h3
        className="filter-title"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Filter Jobs
      </motion.h3>

      <div className="filter-row">

        {/* Location */}
        <div className="filter-group">
          <motion.span
            className="group-title"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Location:
          </motion.span>

          <motion.label initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
            <input type="radio" name="location" /> Noida
          </motion.label>

          <motion.label initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
            <input type="radio" name="location" /> Bangalore
          </motion.label>

          <motion.label initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}>
            <input type="radio" name="location" /> Hyderabad
          </motion.label>

          <motion.label initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }}>
            <input type="radio" name="location" /> Pune
          </motion.label>

          <motion.label initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }} viewport={{ once: true }}>
            <input type="radio" name="location" /> Mumbai
          </motion.label>
        </div>

        {/* Industry */}
        <div className="filter-group">
          <motion.span
            className="group-title"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Industry:
          </motion.span>

          <motion.label initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
            <input type="radio" name="industry" /> Frontend
          </motion.label>

          <motion.label initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
            <input type="radio" name="industry" /> Backend
          </motion.label>

          <motion.label initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}>
            <input type="radio" name="industry" /> Full Stack
          </motion.label>

          <motion.label initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }}>
            <input type="radio" name="industry" /> Data Scientist
          </motion.label>

          <motion.label initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }} viewport={{ once: true }}>
            <input type="radio" name="industry" /> ML Engineer
          </motion.label>

          <motion.label initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.6 }} viewport={{ once: true }}>
            <input type="radio" name="industry" /> DevOps
          </motion.label>
        </div>

      </div>
    </div>
  );
}

export default FilterJobs;