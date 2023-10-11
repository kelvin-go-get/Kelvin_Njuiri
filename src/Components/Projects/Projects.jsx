import React from "react";
import "./Projects.css";
import Preview1 from "../../Assets/images/preview1.png";
import Preview2 from "../../Assets/images/preview2.png";
import Preview from "../../Assets/images/preview3.png";
import { projectsData } from "../../Data/projectsData";

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section_title">Projects</h2>
      <h4 className="section_subtitle">
        What I Have<span> Done</span>
      </h4>

      <div className="projects-container">
        <div className="project">
          <img src={Preview1} alt="" />
          <span className="project-heading">Fit Hub</span>
          <p className="project-details">
            The FitHub Gym React Project is a dynamic web application designed
            to streamline gym management and enhance user engagement.
          </p>
          <div className="project-tech">
            <i class="bx bxl-react">React</i>
            <i class="bx bxl-nodejs">Node.js</i>
          </div>

          <div className="project-buttons">
            <a
              href="https://fit-hub-seven.vercel.app/"
              className="button button--flex"
              target="_blank"
            >
              View
            </a>
            <a
              href="https://github.com/kelvin-go-get/FitHub"
              className="button button--flex"
              target="_blank"
            >
              Code
            </a>
          </div>
        </div>

        <div className="project">
          <img src={Preview} alt="" />
          <span className="project-heading">Avalon Acres</span>
          <p className="project-details">
            Discover the epitome of modern living at Avalon Acres, a prestigious
            real estate project that redefines luxury and comfort.
          </p>
          <div className="project-tech">
            {" "}
            <i class="bx bxl-mongodb">MongoDB</i>
            <i class="bx bx-badge-check">Express.js</i>
            <i class="bx bxl-react">React</i>
            <i class="bx bxl-nodejs">Node.js</i>
          </div>

          <div className="project-buttons">
            <a
              href="https://avalon-acres.vercel.app/"
              className="button button--flex"
              target="_blank"
            >
              View
            </a>
            <a
              href="https://github.com/kelvin-go-get/AvalonAcres"
              className="button button--flex"
              target="_blank"
            >
              Code
            </a>
          </div>
        </div>

        <div className="project">
          <img src={Preview2} alt="" />
          <span className="project-heading">Spend Smart</span>
          <p className="project-details">
            Spend Smart is a personal expense tracking project designed to
            empower users with the ability to monitor and manage their finances
            efficiently.
          </p>
          <div className="project-tech">
            {" "}
            <i class="bx bxl-html5">HTML</i>
            <i class="bx bxl-css3">Css</i>
            <i class="bx bxl-javascript">Vanilla.js</i>
          </div>

          <div className="project-buttons">
            <a
              href="https://spend-smart-wine.vercel.app/"
              className="button button--flex"
              target="_blank"
            >
              View
            </a>
            <a
              href="https://github.com/kelvin-go-get/spend_smart"
              className="button button--flex"
              target="_blank"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
