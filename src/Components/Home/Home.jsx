import React, { useEffect } from "react";
import "./Home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import AOS from "aos";
import "aos/dist/aos.css";


const Home = () => {
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
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
          <Social />

          <div data-aos="zoom-in-up" className="home_image"></div>

          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
