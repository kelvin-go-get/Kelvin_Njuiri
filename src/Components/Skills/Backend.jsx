import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Backend = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate rotation based on the scroll position
      const scrollPosition = window.scrollY;
      const maxRotation = -180;
      const rotationValue = (scrollPosition / window.innerHeight) * maxRotation;

      setRotation(rotationValue);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
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
    </motion.div>
  );
};

export default Backend;
