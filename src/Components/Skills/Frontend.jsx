import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Frontend = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate rotation based on the scroll position
      const scrollPosition = window.scrollY;
      const maxRotation = 180; 
      const rotationValue = (scrollPosition / window.innerHeight) * maxRotation;

      setRotation(rotationValue);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      style={{ rotate: `${rotation}deg` }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="skills_content"
    >
      <h3 className="skills_title">
        Frontend <span>Developer</span>
      </h3>
      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <span>
              <i class="bx bxl-html5"></i>
            </span>
            <div>
              <h3 className="skills_name">HTML</h3>
            </div>
          </div>

          <div className="skills_data">
            <span>
              <i class="bx bxl-css3"></i>
            </span>
            <div>
              <h3 className="skills_name">CSS3</h3>
            </div>
          </div>

          <div className="skills_data">
            <span>
              <i class="bx bxl-javascript"></i>
            </span>
            <div>
              <h3 className="skills_name">JavaScript</h3>
            </div>
          </div>
        </div>

        <div className="skills_group">
          <div className="skills_data">
            <span>
              <i class="bx bxl-tailwind-css"></i>
            </span>
            <div>
              <h3 className="skills_name">TailWind</h3>
            </div>
          </div>

          <div className="skills_data">
            <span>
              <i class="bx bxl-git"></i>
            </span>
            <div>
              <h3 className="skills_name">Git</h3>
            </div>
          </div>

          <div className="skills_data">
            <span>
              <i class="bx bxl-react"></i>
            </span>
            <div>
              <h3 className="skills_name">React</h3>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Frontend;
