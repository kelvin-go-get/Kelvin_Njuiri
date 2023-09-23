import React from "react";
import "./qualifications.css";

const qualifications = () => {
  return (
    <section className="qualification section">
      <h2 className="section_title">Qualifications</h2>
      <h4 className="section_subtitle">
        My<span> Personel</span> Journey
      </h4>

      <div className="qualification_container container">
        <div className="qualification_tabs">


        <div className="qualification_button button--flex">
                <i className="uil uil-briefcase-alt qualification_icon"></i>Experience
            </div>

            <div className="qualification_button button--flex">
                <i className="uil uil-graduation-cap qualification_active qualification_icon"></i>Education
            </div>

          


        </div>

        <div className="qualification_sections">
            <div className="qualification_content qualification_content-active">
                <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title">Software Engeneering</h3>

                        <span className="qualification_subtitle">ALX Africa</span>

                        <div className="qualification_calendar">
                        <i className="uil uil-calendar-alt"></i>AUG 2023 - present
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
                        <h3 className="qualification_title">Software Engeneering</h3>

                        <span className="qualification_subtitle">ALX Africa</span>

                        <div className="qualification_calendar">
                        <i className="uil uil-calendar-alt"></i>AUG 2023 - present
                        </div>
                    </div>
                </div>

            
            </div>
            <div className="qualification_content qualification_content-active">
                <div className="qualification_data">
                   
                    <div>
                        <h3 className="qualification_title">Volunteer Front-End Engineer</h3>

                        <span className="qualification_subtitle">iHealth and Wellness Foundation</span>

                        <div className="qualification_calendar">
                        <i className="uil uil-calendar-alt"></i>Jul 2023 - Present 
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
    </section>
  );
};

export default qualifications;
