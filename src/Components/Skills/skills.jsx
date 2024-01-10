import React, { useEffect } from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 0,
      duration: 2000, 
      easing: "ease-in-out",
      
    });

   
  }, []);

  return (
    <section className="skills section" id="skills">
      <h2 data-aos="zoom-in-up" className="section_title">Skills</h2>
      <h4 data-aos="zoom-in-up" className="section_subtitle">
        My <span>Technical </span>Level
      </h4>
      <div className="skills_container container grid">
        <Frontend  />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
