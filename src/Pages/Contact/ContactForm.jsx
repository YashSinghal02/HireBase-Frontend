import React from "react";
import "./ContactForm.css";
import  contactbagde1 from '../../assets/contactbagde1.jpg'
import  contactbagde2 from '../../assets/contactbagde2.jpg'
import  contactbagde3 from '../../assets/contactbagde3.jpg'
import  contactbagde4 from '../../assets/contactbagde4.jpg'
import { motion } from "framer-motion";


function ContactForm() {
  return (
    <section className="contact-page">
      
      {/* LEFT CONTENT */}
      <motion.div className="contact-page-content"
      initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
      >

        <div className="contact-page-badge">
          <div className="contact-page-avatar-group">
            <img src={contactbagde1} alt="" />
            <img src={contactbagde2} alt="" />
            <img src={contactbagde3} alt="" />
            <img src={contactbagde4} alt="" />
          </div>
          <span>Join community of 1M+ professionals</span>
        </div>

        <h1>
          Ready to <span>Connect</span> With Us?
        </h1>

        <p>
          Whether you're an employer seeking top talent or a job seeker
          exploring new opportunities, our team is here to support you.
          Send us a message and we'll get back to you as soon as possible.
        </p>

        {/* CONTACT INFO CARDS */}
        <div className="contact-info-cards">
          <div className="contact-info-card">
            <div className="contact-info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .99h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.79a16 16 0 006.12 6.12l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <div className="contact-info-text">
              <span className="contact-info-label">Phone</span>
              <span className="contact-info-value">+91 123-4567</span>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div className="contact-info-text">
              <span className="contact-info-label">Email</span>
              <span className="contact-info-value">hirebase26@gmail.com</span>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div className="contact-info-text">
              <span className="contact-info-label">Location</span>
              <span className="contact-info-value">Majra, Dehradun</span>
            </div>
          </div>
        </div>

      </motion.div>

      {/* RIGHT FORM */}
      <motion.div className="contact-page-form-wrapper"
      initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
      >
        <form>

          <div className="contact-page-form-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>

          <div className="contact-page-form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="contact-page-form-group">
            <label>Message</label>
            <textarea rows="4" placeholder="Write your message..." required></textarea>
          </div>

          {/* Separate Line Footer */}
          <div className="contact-page-form-footer">
            <p>
              By submitting, you agree to our 
              <span> Terms</span> & <span> Privacy Policy</span>.
            </p>

            <button type="submit">
              Send Message
            </button>
          </div>

        </form>
      </motion.div>

    </section>
  );
}

export default ContactForm;