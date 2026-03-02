import React, { useState } from "react";
import "./HomeFAQs.css";
import { FaChevronDown } from "react-icons/fa";
import  homefaq from '../../assets/homefaq.jpg'
import { motion } from "framer-motion";


function HomeFAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
  {
    question: "How does HireBase match candidates with jobs?",
    answer:
      "HireBase uses a smart matching system that analyzes skills, experience, and job requirements to recommend the most relevant opportunities to candidates."
  },
  {
    question: "Is HireBase free for job seekers?",
    answer:
      "Yes, job seekers can create profiles, apply to jobs, and receive interview notifications completely free of charge."
  },
  {
    question: "How can employers filter candidates?",
    answer:
      "Employers can filter candidates based on skills, experience level, location, and application history to quickly find the right fit."
  },
  {
    question: "Are employers verified on the platform?",
    answer:
      "Yes, we verify employers to ensure transparency and build trust for job seekers applying through HireBase."
  },
  {
    question: "How do I track my job applications?",
    answer:
      "You can track your application status directly from your dashboard, including interview updates and recruiter responses."
  },
  {
    question: "Can startups and small businesses use HireBase?",
    answer:
      "Absolutely. HireBase is built for companies of all sizes, from startups to large enterprises looking to streamline hiring."
  }
];

  return (
    <section className="faq-section">
         <h2 className="about-page-faq-title text-center">
              <span>Testimonial</span>
            </h2>
      <div className="faq-container">

        {/* IMAGE SIDE */}
        <motion.div className="faq-image"
        initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
          <img
            src={homefaq}
            alt="FAQ"
          />
        </motion.div>

        {/* FAQ SIDE */}
        <motion.div className="faq-content"
        initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
          {/* <p className="faq-tag">FAQ's</p> */}
          <h2>Looking for answer?</h2>
          <p className="faq-description">
            Discover how HireBase simplifies hiring, accelerates careers, and powers modern recruitment.
          </p>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openIndex === index ? "active" : ""}`}
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <div className="faq-question">
                  <h4>{faq.question}</h4>
                  <span
                    className={`arrow ${openIndex === index ? "rotate" : ""}`}
                  >
                 <FaChevronDown />

                  </span>
                </div>

                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}

export default HomeFAQs;