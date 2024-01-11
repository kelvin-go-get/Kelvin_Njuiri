import React, { useEffect } from "react";
import "./Home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="home section" id="home">
      <motion.div
        initial={{ y: "10rem", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 3,
          type: "spring",
        }}
        className="home_container container grid"
      >
        <div className="home_content grid">
          <Social />

          <motion.div
            initial={{ y: "10rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 3,
              type: "spring",
            }}
            className="home_image"
          ></motion.div>

          <Data />
        </div>
        <ScrollDown />
      </motion.div>
    </section>
  );
};

export default Home;
