import React, { useEffect } from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.section
      initial={{ y: "10rem", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 3,
        type: "spring",
      }}
      className="skills section"
      id="skills"
    >
      <h2 className="section_title">Skills</h2>
      <h4 className="section_subtitle">
        My <span>Technical </span>Level
      </h4>
      <div className="skills_container container grid">
        <Frontend />
        <Backend />
      </div>
    </motion.section>
  );
};

export default Skills;
