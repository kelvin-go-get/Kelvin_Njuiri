import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Social = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 0,
      duration: 2000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <div data-aos="zoom-in-up" className="home_social">
      <a
        href="https://www.linkedin.com/in/kelvin-njuiri/"
        className="home_social-icon"
        target="_blank"
      >
        <i class="uil uil-linkedin"></i>
      </a>

      <a
        href="https://twitter.com/k_njuiri"
        className="home_social-icon"
        target="_blank"
      >
        <i class="uil uil-twitter"></i>
      </a>

      <a
        href="https://github.com/kelvin-go-get"
        className="home_social-icon"
        target="_blank"
      >
        <i class="uil uil-github"></i>
      </a>

      <a
        href="https://medium.com/@knjuiri"
        className="home_social-icon"
        target="_blank"
      >
        <i class="uil uil-medium-m"></i>
      </a>
    </div>
  );
};

export default Social;
