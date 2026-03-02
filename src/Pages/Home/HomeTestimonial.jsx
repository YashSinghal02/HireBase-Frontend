import React from "react";
import { motion } from "framer-motion";
import "./HomeTestimonial.css";
import hometest1 from '../../assets/hometest1.jpg'
import hometest2 from '../../assets/hometest2.jpg'
import hometest3 from '../../assets/hometest3.jpg'
import hometest4 from '../../assets/hometest4.jpg'
import hometest5 from '../../assets/hometest5.jpg'
import hometest6 from '../../assets/hometest6.jpg'
import hometest7 from '../../assets/hometest7.png'
import hometest8 from '../../assets/hometest8.jpg'
import hometest9 from '../../assets/hometest9.jpg'

function HomeTestimonial() {

  const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const testimonials = [
    {
      id: 1,
      description:
        "HireBase helped me land interviews within days. The job recommendations are surprisingly accurate.",
      image:hometest1,
      name: "Alex Turner",
      company: "Frontend Developer",
    },
    {
      id: 2,
      description:
        "We reduced our hiring time by 40% after switching to HireBase. The candidate filtering is incredibly powerful.",
      image:hometest2,
      name: "Harry Peter",
      company: "HR Manager",
    },
    {
      id: 3,
      description:
        "The dashboard makes tracking applications and interviews effortless. Everything feels smooth and modern.",
      image:hometest3,
      name: "Jason Kim",
      company: "Product Designer",
    },
    {
      id: 4,
      description:
        "HireBase connects us with quality candidates, not just quantity. It’s now our primary recruitment platform.",
      image:hometest4,
      name: "Sofia Martinez",
      company: "Talent Lead",
    },
    {
      id: 5,
      description:
        "The platform feels secure and transparent. Verified employers make a huge difference for job seekers.",
      image:hometest5,
      name: "Alex Johnson",
      company: "Full Stack Developer",
    },
    {
      id: 6,
      description:
        "Real-time notifications ensured I never missed an interview update. HireBase feels built for the future.",
      image:hometest6,
      name: "Emily Karter",
      company: "Software Engineer",
    },
    {
      id: 7,
      description:
        "The smart matching system saved us hours of manual screening. Highly recommended for growing teams.",
      image:hometest7,
      name: "Christofer Levin",
      company: "Startup Founder",
    },
    {
      id: 8,
      description:
        "Applying to jobs has never been easier. The UI is clean, simple, and distraction-free.",
      image:hometest8,
      name: "Alex Turner",
      company: "Cloud Engineer",
    },
    {
      id: 9,
      description:
        "HireBase makes hiring feel modern and efficient. We can focus on people instead of processes.",
      image: hometest9,
      name: "Harry Peter",
      company: "Operations Head",
    },
  ];

  const columns = [
    { start: 0, end: 2, className: "scroll-1" },
    { start: 2, end: 4, className: "scroll-2" },
    { start: 4, end: 6, className: "scroll-3" },
  ];

  const renderCard = (testimonial, index) => (
    <motion.div
      key={`${testimonial.id}-${index}`}
      className="testimonial-card"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
    >
      <div className="quote-icon">
        {/* your svg remains same */}
        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            stroke="#fff"
            strokeOpacity=".7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 13.056c.464 0 .91-.131 1.237-.364.329-.234.513-.55.513-.88v-3.73c0-.33-.184-.647-.513-.88C7.91 6.97 7.464 6.838 7 6.838c-.232 0-.455-.066-.619-.182-.164-.117-.256-.275-.256-.44v-.622c0-.33.184-.646.513-.879.328-.233.773-.364 1.237-.364.232 0 .455-.066.619-.182.164-.117.256-.275.256-.44V2.485c0-.165-.092-.323-.256-.44a1.1 1.1 0 0 0-.619-.181c-1.392 0-2.728.393-3.712 1.092-.985.7-1.538 1.649-1.538 2.638v6.218c0 .33.184.646.513.88.328.233.773.364 1.237.364zm9.83 0c.465 0 .91-.131 1.238-.364.328-.234.513-.55.513-.88v-3.73c0-.33-.184-.647-.513-.88-.328-.233-.773-.364-1.237-.364-.232 0-.455-.066-.619-.182-.164-.117-.256-.275-.256-.44v-.622c0-.33.184-.646.512-.879.329-.233.774-.364 1.238-.364.232 0 .454-.066.619-.182.164-.117.256-.275.256-.44V2.485c0-.165-.092-.323-.256-.44a1.1 1.1 0 0 0-.62-.181c-1.391 0-2.727.393-3.711 1.092-.985.7-1.538 1.649-1.538 2.638v6.218c0 .33.184.646.512.88.329.233.774.364 1.238.364z" />
          </g>
        </svg>
      </div>

      <p className="testimonial-text">{testimonial.description}</p>

      <div className="testimonial-user">
        <img src={testimonial.image} alt={testimonial.name} />
        <div>
          <h4>{testimonial.name}</h4>
          <span>{testimonial.company}</span>
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.section
      className="testimonial-section"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="about-page-faq-title text-center">
        <span>Testimonial</span>
      </h2>

      <div className="testimonial-header">
        <h2>People love us</h2>
        <p>
          Real stories from designers, developers, and product teams using
          PrebuiltUI to ship faster and with confidence.
        </p>
      </div>

      <div className="testimonial-wrapper">
        <div className="fade-top"></div>
        <div className="fade-bottom"></div>

        <div className="testimonial-grid">
          {columns.map((col, index) => (
            <div key={index} className={`testimonial-column ${col.className}`}>
              {[...testimonials.slice(col.start, col.end),
               ...testimonials.slice(col.start, col.end)
              ].map((testimonial, i) => renderCard(testimonial, i))}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default HomeTestimonial;