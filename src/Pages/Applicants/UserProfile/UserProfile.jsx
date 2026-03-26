import React from 'react'
import UserProfileHeader from './UserProfileHeader'
import MainUserProfile from '../MainUserProfile/MainUserProfile'
import { useParams } from 'react-router-dom';
import { motion } from "framer-motion";

function UserProfile() {
    const { id } = useParams();

  // console.log("USER ID 👉", id);
  return (
    <div>
        <motion.div className="main-profile"
      initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        >
        
            <UserProfileHeader  userId={id}/>
            <div style={{padding:"20px 40px 40px"}}>
        <MainUserProfile  userId={id}/>
        </div>
      </motion.div>
    </div>
  )
}

export default UserProfile
