import React, { useEffect } from "react";
import "./Projects.css";
import Preview1 from "../../Assets/images/preview1.png";
import Preview2 from "../../Assets/images/fudo.png";
import Preview from "../../Assets/images/preview3.png";
import { projectsData } from "../../Data/projectsData";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 0,
      duration: 2000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <section className="projects section" id="projects">
      <h2 data-aos="zoom-in-up" className="section_title">
        Projects
      </h2>
      <h4 data-aos="zoom-in-up" className="section_subtitle">
        What I Have<span> Done</span>
      </h4>

      <div className="projects-container">
        <div data-aos="flip-up" className="project">
          <img src={Preview2} alt="" />
          <span className="project-heading">FUDO</span>
          <p className="project-details">
            Next.js and React-powered pizza delivery platform integrated with
            Sanity database. Aiming to revolutionize pizza ordering with a
            powerful frontend and scalable database.
          </p>
          <div className="project-tech">
            <i class="bx bxl-react">React</i>
            <i class="bx bxl-nodejs">Next.js</i>
            <i class="bx bxl-sanity">sanity</i>
            <i class="bx bxl-vercel">Vercel</i>
          </div>

          <div className="project-buttons">
            <a
              href="https://fudooibsip.vercel.app/"
              className="button button--flex"
              target="_blank"
            >
              View
            </a>
            <a
              href="https://github.com/kelvin-go-get/OIBSIP"
              className="button button--flex"
              target="_blank"
            >
              Code
            </a>
          </div>
        </div>

        <div data-aos="flip-down" className="project">
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
            <i class="bx bxl-vercel">Vercel</i>
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

        <div data-aos="flip-down" className="project">
          <img src={Preview1} alt="" />
          <span className="project-heading">Fit Hub</span>
          <p className="project-details">
            The FitHub Gym React Project is a dynamic web application designed
            to streamline gym management and enhance user engagement.
          </p>
          <div className="project-tech">
            <i class="bx bxl-react">React</i>
            <i class="bx bxl-nodejs">Node.js</i>
            <i class="bx bxl-vercel">Vercel</i>
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
      </div>
    </section>
  );
};

export default Projects;
