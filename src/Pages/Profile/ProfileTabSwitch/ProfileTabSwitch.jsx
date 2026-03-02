import { useState } from "react";
import ChangePassword from "./ChangePassword/ChangePassword";
import EditProfile from "./EditProfile/EditProfile";
import MainProfile from "./MainProfile/MainProfile";
import "./ProfileTabSwitch.css";
import { motion } from "framer-motion";


function ProfileTabSwitch() {
  const [activeTab, setActiveTab] = useState("MainProfile");

  const renderComponent = () => {
    switch (activeTab) {
      case "MainProfile":
        return <MainProfile />;
      case "EditProfile":
        return <EditProfile />;
      case "ChangePassword":
        return <ChangePassword />;
      default:
        return <MainProfile />;
    }
  };

  return (
    <div className="profile-tab-wrapper">
      <div className="profile-tab-grid">
        <motion.div
          className={`profile-tab-switch-first-Categories ${
            activeTab === "MainProfile" ? "active" : ""
          }`}
          onClick={() => setActiveTab("MainProfile")}
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}
        >
          Main Profile
        </motion.div>

        <motion.div
          className={`profile-tab-switch-first-Categories ${
            activeTab === "EditProfile" ? "active" : ""
          }`}
          onClick={() => setActiveTab("EditProfile")}
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}
        >
          Edit Profile
        </motion.div>

        <motion.div
          className={`profile-tab-switch-first-Categories ${
            activeTab === "ChangePassword" ? "active" : ""
          }`}
          onClick={() => setActiveTab("ChangePassword")}
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}
        >
          Change Password
        </motion.div>


      </div>

      <div className="tab-content">{renderComponent()}</div>
    </div>
  );
}

export default ProfileTabSwitch;