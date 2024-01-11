import React, { useState, useEffect } from "react";
import "./qualifications.css";
import { motion } from "framer-motion";

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <motion.section
      initial={{ y: "10rem", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 3,
        type: "spring",
      }}
      className="qualification section"
      id="qualification"
    >
      <h2 className="section_title">Qualifications</h2>
      <h4 className="section_subtitle">
        My<span> Personal</span> Journey
      </h4>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>
        </div>

        <div className="qualification_sections">
          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Software Engineering</h3>

                <span className="qualification_subtitle">ALX Africa</span>

                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>Aug 2023 - present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>

                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>

                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Web Development</h3>

                <span className="qualification_subtitle">100Devs</span>

                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2022 - 2023
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Software Engineering</h3>

                <span className="qualification_subtitle">ALX Africa</span>

                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>Aug 2023 - present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>

                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>

                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Front-End Engineer</h3>

                <span className="qualification_subtitle">
                  iHealth and Wellness Foundation
                </span>

                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>Jul 2023 - Oct 2023
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Junior Web Developer</h3>

                <span className="qualification_subtitle">100Devs</span>

                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>Nov 2022 - May 2023
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>

                <span className="qualification_line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Qualifications;
