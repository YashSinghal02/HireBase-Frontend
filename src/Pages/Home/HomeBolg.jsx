import { motion } from "framer-motion";
import "./HomeBlog.css";
import homeblog1 from "../../assets/homeblog1.jpg";
import homeblog2 from "../../assets/homeblog2.jpg";
import homeblog3 from "../../assets/homeblog3.jpg";

const posts = [
  {
    id: 1,
    date: "21",
    month: "Jan",
    author: "Admin",
    comments: 2,
    title: "Hire The Best Freelancers For Any Job, Online",
    image: homeblog1,
  },
  {
    id: 2,
    date: "8",
    month: "Feb",
    author: "Admin",
    comments: 3,
    title: "You Gain Skills You Get More Opportunity For Job",
    image: homeblog2,
  },
  {
    id: 3,
    date: "15",
    month: "Mar",
    author: "Admin",
    comments: 2,
    title: "You Should Learn Advance Level Wordpress For Job",
    image: homeblog3,
  },
];

function UserIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function CommentIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function HomeBlog() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2 className="home-cards-title2">
        <span>Latest</span> Blogs
      </h2>

      <section className="home-blog-section">
        <div className="home-blog-grid">
          {posts.map((post, index) => (
            <motion.div
              className="home-blog-card"
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              
            >
              <div className="home-blog-card__image-wrapper">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="home-blog-card__date-badge">
                  <span className="home-blog-card__day">{post.date}</span>
                  <span className="home-blog-card__month">{post.month}</span>
                </div>
              </div>

              <div className="home-blog-card__body">
                <div className="home-blog-card__meta">
                  <span className="home-blog-card__meta-item">
                    <UserIcon /> {post.author}
                  </span>
                  <span className="home-blog-card__meta-item">
                    <CommentIcon /> {post.comments} Comments
                  </span>
                </div>

                <h3 className="home-blog-card__title">{post.title}</h3>

                <motion.button
                  className="home-blog-card__read-more"
                  whileHover={{ x: 5 }}
                >
                  Read More <ArrowIcon />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}