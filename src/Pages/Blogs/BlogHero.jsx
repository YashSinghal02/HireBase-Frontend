import React from "react";
import "./BlogHero.css";
import { FiClock, FiBookmark } from "react-icons/fi";
import { motion } from "framer-motion";

function BlogHero() {
  return (
    <section className="blog-hero-section">
      <div className="blog-hero-container">
        {/* LEFT CONTENT */}
        <motion.div
          className="blog-hero-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="blog-hero-badge">HireBase Blog</span>

          <h1 className="blog-hero-title">
            Insights, strategies, and stories shaping the future of hiring.
          </h1>

          <p className="blog-hero-description">
            Explore expert perspectives on recruitment, talent strategy,
            employer branding, and career growth curated by the HireBase team.
          </p>

          <div className="blog-hero-trending">
            <span className="blog-hero-trending-label">Trending Topics</span>

            <div className="blog-hero-tags">
              <button className="blog-hero-tag">Hiring Strategy</button>
              <button className="blog-hero-tag">Employer Branding</button>
              <button className="blog-hero-tag">Future of Work</button>
            </div>
          </div>
        </motion.div>

        {/* RIGHT FEATURED CARD */}
        <motion.div
          className="blog-hero-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="blog-hero-featured-card">
            <span className="blog-hero-featured-label">FEATURED ARTICLE</span>

            <h3 className="blog-hero-featured-title">
              How data driven hiring is transforming modern recruitment teams
            </h3>

            <div className="blog-hero-featured-meta">
              <span className="blog-hero-meta-item">
                <FiClock className="blog-hero-meta-icon" />8 min read
              </span>

              <span className="blog-hero-meta-item">
                <FiBookmark className="blog-hero-meta-icon" />
                Save to library
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default BlogHero;
