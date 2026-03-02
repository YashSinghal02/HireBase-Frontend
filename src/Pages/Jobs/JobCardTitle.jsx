import React from 'react'
import { motion } from "framer-motion";


function JobCardTitle() {
  return (
    <div>
      <motion.h2 className="home-cards-title2"
      initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}>
           <span>Latest & Top</span> Job Opening
        </motion.h2>
    </div>
  )
}

export default JobCardTitle
