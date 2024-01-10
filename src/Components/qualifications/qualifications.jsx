import React, { useState, useEffect } from "react";
import "./qualifications.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 0,
      duration: 2000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <section className="qualification section" id="qualification">
      <h2 data-aos="zoom-in-up" className="section_title">
        Qualifications
      </h2>
      <h4 data-aos="zoom-in-up" className="section_subtitle">
        My<span> Personal</span> Journey
      </h4>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            data-aos="zoom-in-up"
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
            data-aos="zoom-in-up"
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
            <div data-aos="zoom-in-left" className="qualification_data">
              <div>
                <h3 className="qualification_title">Software Engineering</h3>

                <span className="qualification_subtitle">ALX Africa</span>

                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>Aug 2023 - present
                </div>
              </div>

              <div data-aos="zoom-in-up">
                <span className="qualification_rounder"></span>

                <span className="qualification_line"></span>
              </div>
            </div>

            <div data-aos="zoom-in-up" className="qualification_data">
              <div></div>

              <div data-aos="zoom-in-up">
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
              <div data-aos="zoom-in-up">
                <h3 className="qualification_title">Software Engineering</h3>

                <span className="qualification_subtitle">ALX Africa</span>

                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>Aug 2023 - present
                </div>
              </div>

              <div data-aos="zoom-in-up">
                <span className="qualification_rounder"></span>

                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div data-aos="zoom-in-up">
                <span className="qualification_rounder"></span>

                <span className="qualification_line"></span>
              </div>

              <div data-aos="zoom-in-up">
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
              <div data-aos="zoom-in-up">
                <h3 className="qualification_title">Junior Web Developer</h3>

                <span className="qualification_subtitle">100Devs</span>

                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>Nov 2022 - May 2023
                </div>
              </div>

              <div data-aos="zoom-in-up">
                <span className="qualification_rounder"></span>

                <span className="qualification_line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
