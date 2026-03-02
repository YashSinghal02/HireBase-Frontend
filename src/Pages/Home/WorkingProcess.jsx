import React from "react";
import { motion } from "framer-motion";
import { FaUserPlus, FaFileAlt, FaSearch, FaPaperPlane } from "react-icons/fa";
import "./WorkingProcess.css";

function WorkingProcess() {
  const steps = [
    {
      icon: <FaUserPlus />,
      title: "Account Create",
      desc: "Create your account safely & confidently.",
    },
    {
      icon: <FaFileAlt />,
      title: "Create Resume",
      desc: "Build your professional resume easily.",
    },
    {
      icon: <FaSearch />,
      title: "Find Jobs",
      desc: "Search trending jobs that match your skills.",
    },
    {
      icon: <FaPaperPlane />,
      title: "Apply Jobs",
      desc: "Apply quickly and track your applications.",
    },
  ];

  return (
    <section className="process-section">
      
      {/* Header Animation */}
      <motion.div
        className="process-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>
          HireBase <span>Process</span>
        </h2>
        <p>To choose your trending job dream & make future bright.</p>
      </motion.div>

      <div className="process-wrapper">
        {steps.map((step, index) => (
          <motion.div
            className="process-item"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            
            {/* Circular Arrow SVG */}
            {index !== steps.length && (
              <svg className="arrow-svg" viewBox="0 0 300 300">
                <defs>
                  <marker
                    id={`arrowHead${index}`}
                    markerWidth="10"
                    markerHeight="10"
                    refX="5"
                    refY="5"
                    orient="auto"
                  >
                    <path d="M0,0 L10,5 L0,10 Z" fill="#3DAA7D" />
                  </marker>
                </defs>

                <path
                  d="M150 30 
                     A120 120 0 1 1 149.9 30"
                  stroke="#3DAA7D"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  markerEnd={`url(#arrowHead${index})`}
                  opacity="0.8"
                />
              </svg>
            )}

            <div className="circle">
              <div className="icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default WorkingProcess;