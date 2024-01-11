import React, { useState, useEffect } from "react";
import "./Header.css";
import { motion } from "framer-motion";

const Header = () => {
  /*TOGGLE MENU*/
  const [Toggle, showMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "blur" : ""}`}>
      <motion.nav
        initial={{ y: "10rem", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 3,
          type: "spring",
        }}
        className="nav container"
      >
        <a href="index.html" className="nav_logo">
          Kel<span>vin</span>
        </a>
        <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#home" className="nav_link active-link">
                <i className="uil uil-estate nav_icon"></i>Home
              </a>
            </li>

            <li className="nav_item">
              <a href="#about" className="nav_link">
                <i className="uil uil-user nav_icon"></i>About
              </a>
            </li>

            <li className="nav_item">
              <a href="#skills" className="nav_link">
                <i className="uil uil-file-alt nav_icon"></i>Skills
              </a>
            </li>

            <li className="nav_item">
              <a href="#services" className="nav_link">
                <i className="uil uil-briefcase-alt nav_icon"></i>Services
              </a>
            </li>

            <li className="nav_item">
              <a href="#projects" className="nav_link">
                <i className="uil uil-scenery nav_icon"></i>Projects
              </a>
            </li>

            <li className="nav_item">
              <a href="#contact" className="nav_link">
                <i className="uil uil-message nav_icon"></i>Contact
              </a>
            </li>
          </ul>

          <i
            class="uil uil-times nav_close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;
