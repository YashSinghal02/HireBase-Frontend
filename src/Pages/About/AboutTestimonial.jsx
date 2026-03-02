import React from "react";
import abouttest1 from "../../assets/abouttest1.jpg";
import abouttest2 from "../../assets/abouttest2.jpg";
import abouttest3 from "../../assets/abouttest3.jpg";
import abouttest4 from "../../assets/abouttest4.jpg";
import hometest7 from "../../assets/hometest7.png";
import abouttest5 from "../../assets/abouttest5.jpg";
import { motion } from "framer-motion";

function AboutTestimonial() {
  const testimonials = [
    {
      rating: 5,
      text: "HireBase helped me land interviews within a week. The job matching system feels smart and personalized.",
      name: "Cristofer Levin",
      role: "Frontend Developer",
      image: abouttest1,
    },
    {
      rating: 4.5,
      text: "As a startup founder, finding verified candidates used to be difficult. HireBase made hiring faster and stress-free.",
      name: "Rohan Mehta",
      role: "Startup Founder",
      image: abouttest2,
    },
    {
      rating: 4,
      text: "The dashboard is clean and easy to use. Tracking applications and interviews has never been this smooth.",
      name: "Jason Kim",
      role: "Product Designer",
      image: abouttest3,
    },
    {
      rating: 5,
      text: "HireBase feels modern and simple to use. Verified employers make a big difference.",
      name: "Sofia Martinez",
      role: "UX Designer",
      image: abouttest4,
    },
    {
      rating: 4.5,
      text: "We reduced hiring time by 40% after switching to HireBase. The workflow is incredibly efficient.",
      name: "Daniel Wong",
      role: "HR Manager",
      image: hometest7,
    },
    {
      rating: 5,
      text: "Creating my profile was quick and professional. I started receiving job alerts immediately.",
      name: "Priya Verma",
      role: "Data Analyst",
      image: abouttest5,
    },
  ];

  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3, 6);

  const Star = ({ type }) => {
    if (type === "half") {
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" className="mr-1">
          <defs>
            <linearGradient id="halfGrad">
              <stop offset="50%" stopColor="#3DAA7D" />
              <stop offset="50%" stopColor="#1f2c29" />
            </linearGradient>
          </defs>
          <path
            fill="url(#halfGrad)"
            d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l7.1-1.01z"
          />
        </svg>
      );
    }

    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={type === "full" ? "#3DAA7D" : "#1f2c29"}
        className="mr-1"
      >
        <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l7.1-1.01z" />
      </svg>
    );
  };

  const renderStars = (rating) => {
    const stars = [];
    const full = Math.floor(rating);
    const half = rating % 1 !== 0;

    for (let i = 0; i < full; i++) {
      stars.push(<Star key={"f" + i} type="full" />);
    }

    if (half) {
      stars.push(<Star key="half" type="half" />);
    }

    while (stars.length < 5) {
      stars.push(<Star key={"e" + stars.length} type="empty" />);
    }

    return stars;
  };

  const Card = ({ item }) => (
    <div className="bg-[#111c1a] border border-[#1f2c29] hover:border-[#3DAA7D] transition-all duration-300 rounded-2xl p-6 shrink-0 w-[360px]">
      {/* Stars */}
      <div className="flex mb-4">{renderStars(item.rating)}</div>

      <p className="text-gray-300 text-sm mb-6 leading-relaxed">{item.text}</p>

      <div className="flex items-center gap-3">
        <img
          src={item.image}
          alt={item.name}
          className="w-12 h-12 rounded-full object-cover border border-[#3DAA7D]"
        />
        <div>
          <p className="font-medium text-white text-sm">{item.name}</p>
          <p className="text-[#3DAA7D] text-xs">{item.role}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-[#0f1514] py-28 overflow-hidden">
      <style>
        {`
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes scrollRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }

          .scroll-left {
            display: flex;
            animation: scrollLeft 12s linear infinite;
          }

          .scroll-right {
            display: flex;
            animation: scrollRight 12s linear infinite;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl md:text-5xl font-semibold  mb-4"
            style={{ color: "#3DAA7D" }}
          >
            Testimonial
          </h2>
          <h4 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            What People Are Saying
          </h4>
        </motion.div>

        {/* Row 1 */}
        <div className="relative overflow-hidden mb-10">
          {/* Fade Left */}
          <div
            className="absolute left-0 top-0 h-full w-32 z-20 pointer-events-none 
          bg-gradient-to-r from-[#0f1514] to-transparent"
          ></div>

          {/* Fade Right */}
          <div
            className="absolute right-0 top-0 h-full w-32 z-20 pointer-events-none 
          bg-gradient-to-l from-[#0f1514] to-transparent"
          ></div>

          <div className="scroll-left gap-8">
            {[...firstRow, ...firstRow].map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="relative overflow-hidden">
          {/* Fade Left */}
          <div
            className="absolute left-0 top-0 h-full w-32 z-20 pointer-events-none 
          bg-gradient-to-r from-[#0f1514] to-transparent"
          ></div>

          {/* Fade Right */}
          <div
            className="absolute right-0 top-0 h-full w-32 z-20 pointer-events-none 
          bg-gradient-to-l from-[#0f1514] to-transparent"
          ></div>

          <div className="scroll-right gap-8">
            {[...secondRow, ...secondRow].map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutTestimonial;
