import "./TrustCompany.css";
import PayPal from "../../assets/PayPal.png";
import PhonePe from "../../assets/PhonePe.png";
import Netflix from "../../assets/Netflix.png";
import ibm from "../../assets/ibm.png";
import fedex from "../../assets/fedex.png";
import Samsung from "../../assets/Samsung.png";
import walmart from "../../assets/walmart.png";
import adobe from "../../assets/adobe.png";
import amazon from "../../assets/amazon.png";
import { motion } from "framer-motion";

function TrustCompany() {
  return (
    <div className="moving-wrapper">
      <motion.h2
        className="trust-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Trusted by <span>Leading Companies</span> Worldwide
      </motion.h2>

      <div className="moving-trustCompany">
        {/* First Set */}
        <div className="moving-imgs-hero">
          <img src={adobe} alt="" />
        </div>
        <div className="moving-imgs-hero">
          <img src={ibm} alt="" />
        </div>
        <div className="moving-imgs-hero">
          <img src={fedex} alt="" />
        </div>
        <div className="moving-imgs-hero">
          <img src={Netflix} alt="" />
        </div>
        <div className="moving-imgs-hero">
          <img src={PayPal} alt="" />
        </div>
        <div className="moving-imgs-hero">
          <img src={walmart} alt="" />
        </div>
        <div className="moving-imgs-hero">
          <img src={amazon} alt="" />
        </div>
        <div className="moving-imgs-hero">
          <img src={Samsung} alt="" />
        </div>
        <div className="moving-imgs-hero">
          <img src={PhonePe} alt="" />
        </div>

        {/* Duplicate Set (for seamless infinite scroll) */}
        <div className="moving-imgs-hero">
          <img src={adobe} alt="" />
        </div>
        <div className="moving-imgs-hero">
          <img src={ibm} alt="" />
        </div>
        <div className="moving-imgs-hero">
          <img src={fedex} alt="" />
        </div>
        <div className="moving-imgs-hero">
          <img src={Netflix} alt="" />
        </div>
        <div className="moving-imgs-hero">
          <img src={PayPal} alt="" />
        </div>
        <div className="moving-imgs-hero">
          <img src={walmart} alt="" />
        </div>
        <div className="moving-imgs-hero">
          <img src={amazon} alt="" />
        </div>
        <div className="moving-imgs-hero">
          <img src={Samsung} alt="" />
        </div>
        <div className="moving-imgs-hero">
          <img src={PhonePe} alt="" />
        </div>
      </div>
    </div>
  );
}

export default TrustCompany;
