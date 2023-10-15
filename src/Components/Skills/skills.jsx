import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <h4 className="section_subtitle">
        My <span>Technical </span>Level
      </h4>
      <div className="skills_container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default skills;
