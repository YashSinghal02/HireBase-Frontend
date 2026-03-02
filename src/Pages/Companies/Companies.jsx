import { Link } from "react-router-dom";
import "./Companies.css";
import CompanyCreate from "./CompanyCreate";
import { motion } from "framer-motion";

function Companies() {
  return (
    <motion.div
      className="companies-wrapper"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="companies-header">
        {/* Filter */}
        <motion.input
          type="text"
          placeholder="Filter by name"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
        {/* new-company-btn */}
        <Link to="/dashboard/newcompany">
          <motion.button
            className="new-company-btn"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            New Company
          </motion.button>
        </Link>
      </div>

      <CompanyCreate />

      <p className="companies-footer">
        A list of your recent registered companies
      </p>
    </motion.div>
  );
}

export default Companies;
