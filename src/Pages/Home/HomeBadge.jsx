import './HomeBadge.css'
import Homebadge1 from '../../assets/Homebadge1.jpg'
import Homebadge2 from '../../assets/Homebadge2.jpg'
import Homebadge3 from '../../assets/Homebadge3.avif'
import { motion } from "framer-motion";

function HomeBadge() {
  return (
    <motion.div 
      className="home-badge-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="home-badge-container">

        <motion.div 
          className="home-badge-avatars-wrapper"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.img
            className="home-badge-avatar"
            src={Homebadge1}
            alt="user1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.img
            className="home-badge-avatar home-badge-avatar-overlap-1"
            src={Homebadge2}
            alt="user2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.img
            className="home-badge-avatar home-badge-avatar-overlap-2"
            src={Homebadge3}
            alt="user3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </motion.div>

        <motion.p
          className="home-badge-trust-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Trusted by <span>10,000+</span> people
        </motion.p>

      </div>
    </motion.div>
  )
}

export default HomeBadge;