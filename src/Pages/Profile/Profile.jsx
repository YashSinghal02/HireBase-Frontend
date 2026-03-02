import './Profile.css'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import ProfileTabSwitch from './ProfileTabSwitch/ProfileTabSwitch'
import { motion } from "framer-motion";


function Profile() {
  return (
    <div>
      <motion.div className="main-profile"
      initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        >
        <ProfileHeader/>
        <ProfileTabSwitch/>
      </motion.div>
    </div>
  )
}

export default Profile
