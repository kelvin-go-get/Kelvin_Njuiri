import React from 'react';
import "./footer.css"

const footer = () => {
  return (
   <footer className='footer'>
    <div className="footer_container container">
        <h1 className="footer_title">Kelvin</h1>
        <ul className="footer_list">
            <li>
                <a href="#about" className="footer_link">About</a>
            </li>

            <li>
                <a href="#projects" className="footer_link">Projects</a>
            </li>

            <li>
                <a href="#qualification" className="footer_link">Qualification</a>
            </li>

        </ul>

<div className="footer_social">
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

<span className='footer_copy'>&copy; Kelvin 2023. All rights reserved.</span>
    </div>
   </footer>
  )
}

export default footer