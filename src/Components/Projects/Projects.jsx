import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import Preview1 from "../../Assets/images/preview1.png";
import Preview2 from "../../Assets/images/fudo.png";
import Preview from "../../Assets/images/preview3.png";

const Projects = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.section
      initial={{ y: "10rem", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 3,
        type: "spring",
      }}
      className="projects section"
      id="projects"
    >
      <h2 className="section_title">Projects</h2>
      <h4 className="section_subtitle">
        What I Have<span> Done</span>
      </h4>

      <div className="projects-container">
        <motion.div
          className={`project ${isFlipped ? "flipped" : ""}`}
          onClick={handleCardClick}
          initial={{ transform: "rotateY(50deg)" }}
          animate={{ transform: `rotateY(${isFlipped ? 360 : 0}deg)` }}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          <img src={Preview2} alt="" />
          <span className="project-heading">FUDO</span>
          <p className="project-details">
            Next.js and React-powered pizza delivery platform integrated with
            Sanity database. Aiming to revolutionize pizza ordering with a
            powerful frontend and scalable database.
          </p>
          <div className="project-tech">
            <i className="bx bxl-react">React</i>
            <i className="bx bxl-nodejs">Next.js</i>
            <i className="bx bxl-sanity">sanity</i>
            <i className="bx bxl-vercel">Vercel</i>
          </div>

          <div className="project-buttons">
            <a
              href="https://fudooibsip.vercel.app/"
              className="button button--flex"
              target="_blank"
              rel="noopener noreferrer"
            >
              View
            </a>
            <a
              href="https://github.com/kelvin-go-get/OIBSIP"
              className="button button--flex"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </div>
        </motion.div>

        <motion.div
          className={`project ${isFlipped ? "flipped" : ""}`}
          onClick={handleCardClick}
          initial={{ transform: "rotateY(50deg)" }}
          animate={{ transform: `rotateY(${isFlipped ? 360 : 0}deg)` }}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          <img src={Preview} alt="" />
          <span className="project-heading">Avalon Acres</span>
          <p className="project-details">
            Discover the epitome of modern living at Avalon Acres, a prestigious
            real estate project that redefines luxury and comfort.
          </p>
          <div className="project-tech">
            <i className="bx bxl-mongodb">MongoDB</i>
            <i className="bx bx-badge-check">Express.js</i>
            <i className="bx bxl-react">React</i>
            <i className="bx bxl-nodejs">Node.js</i>
            <i className="bx bxl-vercel">Vercel</i>
          </div>

          <div className="project-buttons">
            <a
              href="https://avalon-acres.vercel.app/"
              className="button button--flex"
              target="_blank"
              rel="noopener noreferrer"
            >
              View
            </a>
            <a
              href="https://github.com/kelvin-go-get/AvalonAcres"
              className="button button--flex"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </div>
        </motion.div>

        <motion.div
          className={`project ${isFlipped ? "flipped" : ""}`}
          onClick={handleCardClick}
          initial={{ transform: "rotateY(50deg)" }}
          animate={{ transform: `rotateY(${isFlipped ? 360 : 0}deg)` }}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          <img src={Preview1} alt="" />
          <span className="project-heading">Fit Hub</span>
          <p className="project-details">
            The FitHub Gym React Project is a dynamic web application designed
            to streamline gym management and enhance user engagement.
          </p>
          <div className="project-tech">
            <i className="bx bxl-react">React</i>
            <i className="bx bxl-nodejs">Node.js</i>
            <i className="bx bxl-vercel">Vercel</i>
          </div>

          <div className="project-buttons">
            <a
              href="https://fit-hub-seven.vercel.app/"
              className="button button--flex"
              target="_blank"
              rel="noopener noreferrer"
            >
              View
            </a>
            <a
              href="https://github.com/kelvin-go-get/FitHub"
              className="button button--flex"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
