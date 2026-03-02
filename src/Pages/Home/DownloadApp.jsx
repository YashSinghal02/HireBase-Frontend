import { motion } from "framer-motion";
import "./DownloadApp.css";
import person from "../../assets/person2.png";
import person2 from "../../assets/person5.png";

function DownloadApp() {

  const sectionVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const floatVariant = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className="download-app"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >

      {/* LEFT SIDE */}
      <div className="app-options">

        <h2 className="download-title">
          Download Our App Now
        </h2>

        <div className="app-buttons">

          {/* App Store */}
          <motion.a
            href="#"
            className="playstore-button"
            whileHover={{ y: -4, scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <span className="icon">
              {/* same svg */}
            </span>
            <span className="texts">
              <span className="text-1">Download from</span>
              <span className="text-2">App Store</span>
            </span>
          </motion.a>

          {/* Google Play */}
          <motion.a
            href="#"
            className="playstore-button"
            whileHover={{ y: -4, scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="icon"
              viewBox="0 0 512 512"
            >
              <path d="M99.617 8.057..." />
            </svg>
            <span className="texts">
              <span className="text-1">GET IT ON</span>
              <span className="text-2">Google Play</span>
            </span>
          </motion.a>

        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="download-app-img">
        <motion.img
          src={person}
          alt="App preview"
          variants={floatVariant}
          animate="animate"
        />
        <motion.img
          src={person2}
          alt="App preview"
          variants={floatVariant}
          animate="animate"
          transition={{ delay: 1 }}
        />
      </div>

    </motion.div>
  );
}

export default DownloadApp;