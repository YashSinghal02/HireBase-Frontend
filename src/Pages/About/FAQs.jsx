import React, { useState } from "react";
import "./FAQs.css";
import { motion, AnimatePresence } from "framer-motion";

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does HireBase match me with jobs?",
      answer:
        "HireBase uses smart filtering and profile-based matching to recommend jobs that align with your skills, experience, and preferences. The more complete your profile, the better your matches.",
    },
    {
      question: "Are employers on HireBase verified?",
      answer:
        "Yes. We verify employers before allowing them to post jobs. This ensures a safe and trustworthy hiring environment for job seekers.",
    },
    {
      question: "Is HireBase free for job seekers?",
      answer:
        "Absolutely. Creating a profile, applying for jobs, and receiving alerts are completely free for candidates.",
    },
    {
      question: "How can companies find the right candidates?",
      answer:
        "Employers can use advanced filters, skill-based search, and smart recommendations to connect with high-quality candidates quickly.",
    },
    {
      question: "Can I track my job applications?",
      answer:
        "Yes. Your dashboard allows you to track applications, interview status, and recruiter responses in real-time.",
    },
  ];

  return (
    <section className="bg-[#0f1514] py-20 px-4 h-[950px]">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-5 py-1 mb-4">
            <h2 className="about-page-faq-title">
              <span>FAQs</span>
            </h2>
          </div>

          <h2 className="text-4xl font-semibold text-white mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Everything you need to know about using HireBase as a job seeker or
            employer.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="bg-[#111c1a] border border-[#1f2c29] hover:border-[#3DAA7D] transition-all duration-300 rounded-xl p-6 cursor-pointer"
            >
              {/* Question Row */}
              <motion.div
                className="flex items-center justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-medium text-base">
                  {faq.question}
                </h3>

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className={`text-[#3DAA7D] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </motion.div>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden mt-4"
                  >
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQs;
