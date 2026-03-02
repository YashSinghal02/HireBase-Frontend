import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./Footer.css";
import logo from "../../assets/logo.png"; 
import { FaChevronUp } from "react-icons/fa";

import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";

function Footer() {
   const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (val) => {
    // console.log(val);
  });
   const opacity = useTransform(scrollY, [0, 200], ["0", "1"]);
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Side */}
        <div className="footer-left">
          <img src={logo} alt="Job Hunt Logo" className="footer-logo" />
          <p>© 2026 HireBase. All rights reserved.</p>
        </div>

        {/* Right Side */}
        <div className="footer-right">
          <a href="https://github.com/YashSinghal02"target="_blank"rel="noopener noreferrer"> <FaGithub /></a>
          <a href="https://www.linkedin.com/in/yashsinghal01"target="_blank"rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://www.linkedin.com/in/yashsinghal01"target="_blank"rel="noopener noreferrer"><FaTwitter /></a>
        </div>

      </div>
 <motion.button
  className="downtotop"
  style={{ opacity }}
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.9 }}
  transition={{ type: "spring", stiffness: 200 }}
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  <FaChevronUp />
</motion.button>
    </footer>
  );
}

export default Footer;