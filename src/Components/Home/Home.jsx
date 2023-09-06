import React from 'react';
import './Home.css';
import Social from './Social';
import Data from './Data';

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
          <Social/>

          <div className="home_image"></div>

          <Data/>
        </div>
      </div>
    </section>
  )
}

export default Home