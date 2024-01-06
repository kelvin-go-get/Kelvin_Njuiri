import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Backend = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 0,
      duration: 2000, 
      easing: "ease-in-out",
      
    });

   
  }, []);
  return (
    <div data-aos="fade-up-left" className="skills_content">
      <h3 className="skills_title">
        Backend <span>Developer</span>
      </h3>
      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <span>
              <i class="bx bxl-nodejs"></i>
            </span>

            <div>
              <h3 className="skills_name">Node.js</h3>
            </div>
          </div>

          <div className="skills_data">
            <span>
              <i class="bx bxl-mongodb"></i>
            </span>

            <div>
              <h3 className="skills_name">MongoDB</h3>
            </div>
          </div>

          <div className="skills_data">
            <span>
              <i class="bx bx-badge-check"></i>
            </span>

            <div>
              <h3 className="skills_name">Express.js</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
