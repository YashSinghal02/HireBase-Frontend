import "./FilterJobs.css";
import { motion } from "framer-motion";

function FilterJobs({ filters, setFilters }) {
  const handleReset = () => {
    setFilters({
      location: "",
      industry: "",
    });
  };

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
          <span className="group-title">Location:</span>

          {["Delhi","Noida", "Bangalore", "Hyderabad", "Pune", "Mumbai","Chennai"].map(
            (city, i) => (
              <motion.label
                key={city}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <input
                  type="radio"
                  name="location"
                  value={city}
                  checked={filters.location === city}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      location: e.target.value,
                    }))
                  }
                />
                {city}
              </motion.label>
            )
          )}
        </div>

        {/* Industry */}
        <div className="filter-group">
          <span className="group-title">Industry:</span>

          {[
            "Frontend",
            "Backend",
            "Full Stack",
            "Data Scientist",
            "Software Engineer",
            "App Developer",
          ].map((role, i) => (
            <motion.label
              key={role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <input
                type="radio"
                name="industry"
                value={role}
                checked={filters.industry === role}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    industry: e.target.value,
                  }))
                }
              />
              {role}
            </motion.label>
          ))}
        </div>

        {/* Reset Button */}
        <div className="filter-actions">
          <button className="reset-btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterJobs;