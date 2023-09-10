import React from 'react'

const Info = () => {
  return (
    <div className="about_info grid">

      <div className="about_box">
      <i class="uil uil-award-alt about_icon"></i>
        <h3 className="about_title">Experience</h3>
          <h4 className="about_subtitle"><span>2 Years</span> Working</h4>
      </div>

      <div className="about_box">
      <i class="uil uil-briefcase-alt about_icon"></i>
        <h3 className="about_title">Completed</h3>
          <h4 className="about_subtitle"><span>30 +</span> Projects</h4>
      </div>

      <div className="about_box">
      <i class="uil uil-headphones-alt about_icon"></i>
        <h3 className="about_title">Support</h3>
          <h4 className="about_subtitle">online <span>24/7</span></h4>
      </div>

    </div>
  )
}

export default Info