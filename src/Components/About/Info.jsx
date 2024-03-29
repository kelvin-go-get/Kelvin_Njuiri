import React from "react";
import { motion } from "framer-motion";

const Info = () => {
  return (
    <motion.div
      initial={{ y: "10rem", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 3,
        type: "tween",
      }}
      className="about_info grid"
    >
      <div className="about_box">
        <i class="uil uil-award-alt about_icon"></i>
        <h3 className="about_title">Experience</h3>
        <h4 className="about_subtitle">
          <span>2 Years</span> Working
        </h4>
      </div>

      <div className="about_box">
        <i class="uil uil-briefcase-alt about_icon"></i>
        <h3 className="about_title">Completed</h3>
        <h4 className="about_subtitle">
          <span>20 +</span> Projects
        </h4>
      </div>

      <div className="about_box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z" />
        </svg>
        <h3 className="about_title">Support</h3>
        <h4 className="about_subtitle">
          online <span>24/7</span>
        </h4>
      </div>
    </motion.div>
  );
};

export default Info;
