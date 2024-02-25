import React from "react";
import { motion } from "framer-motion";

const Social = () => {
  return (
    <motion.div
      initial={{ y: "10rem", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 3,
        type: "spring",
      }}
      className="home_social"
    >
      <a
        href="https://www.linkedin.com/in/kelvin-njuiri/"
        className="home_social-icon"
        target="_blank"
      >
        <i class="uil uil-linkedin"></i>
      </a>

      <a
        href="https://twitter.com/k_njuiri"
        className="home_social-icon"
        target="_blank"
      >
        <i class="uil uil-twitter"></i>
      </a>

      <a
        href="https://github.com/kelvin-go-get"
        className="home_social-icon"
        target="_blank"
      >
        <i class="uil uil-github"></i>
      </a>

      <a
        href="https://medium.com/@knjuiri"
        className="home_social-icon"
        target="_blank"
      >
        <i class="uil uil-medium-m"></i>
      </a>
    </motion.div>
  );
};

export default Social;
