import "./Unauthorized.css";
import monster3 from "../../assets/monster3.webm";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Unauthorized() {

  const navigate = useNavigate();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.35
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div>
      <div className="background-unauthorized">

      <div className="unauthorized-main-txt">

 

  <motion.h1
    variants={item}
    initial={{ opacity: 0, scale: 0.4 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.9,
      type: "spring",
      stiffness: 120
    }}
  >
    404
  </motion.h1>

  <motion.div
    className="unauthorized-video"
    initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
    animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
    transition={{
      delay: 0.2,
      duration: 0.8,
      type: "spring",
      stiffness: 100
    }}
  >
    <video
      src={monster3}
      autoPlay
      muted
      loop
      playsInline
    />
  </motion.div>

</div>
 <motion.div
  className="clouds-bg-img1"
  initial={{ opacity: 0, x: -80 }}
  animate={{ opacity: 0.35, x: 0 }}
  transition={{ duration: 1.2, delay: 0.4 }}
/>

<motion.div
  className="clouds-bg-img2"
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 0.35, x: 0 }}
  transition={{ duration: 1.2, delay: 0.6 }}
/>

<motion.div
  className="clouds-bg-img3"
  initial={{ opacity: 0, y: -60 }}
  animate={{ opacity: 0.35, y: 0 }}
  transition={{ duration: 1.2, delay: 0.8 }}
/>

        {/* Text */}
        <motion.div
          className="unauthorized-txt"
          variants={container}
          initial="hidden"
          animate="show"
        >

          <motion.h3 variants={item}>
            Oops, I think we're lost...
          </motion.h3>

          <motion.h5 variants={item}>
            Let's get you back to somewhere familiar
          </motion.h5>

          <motion.div
            className="unauthorized-btn"
            variants={item}
          >
            <motion.button
              
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/")}
            >
              <IoArrowBackCircleOutline className="back-unauthorized" />
              Back Home
            </motion.button>
          </motion.div>

        </motion.div>

      </div>
    </div>
  );
}

export default Unauthorized;