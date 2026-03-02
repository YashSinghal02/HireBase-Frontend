import "./ProfileHeader.css";
import profilebanner from '../../../assets/profilebanner.png'
import { motion } from "framer-motion";


function ProfileHeader() {
  return (
    <div>
      {/* Banner */}
      <div className="profile-header-banner-img">
        <label className="upload-banner">
          <input type="file" hidden />
          ✎
        </label>
        <img
          src={profilebanner}
          alt="banner"
        />
      </div>

      {/* Avatar + Text */}
      <div className="profile-header-img-txt-flx">
        <motion.div className="profile-header-main-img"
        initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg?uid=R144483096&ga=GA1.1.1228816863.1772011796&semt=ais_hybrid&w=740&q=80"
            alt="avatar"
          />

          {/* Hover Upload Overlay */}
          <label className="upload-avatar">
            <input type="file" hidden />
            Upload Image
          </label>
        </motion.div>

        <motion.div className="profile-header-txt"
        initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
          <h3>Yash Singhal</h3>
          <p>Full Stack Developer</p>
        </motion.div>
      </div>
    </div>
  );
}

export default ProfileHeader;