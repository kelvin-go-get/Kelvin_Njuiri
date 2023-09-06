import React from 'react'
// Correct the import path
import "./main.css"
import BackgroundVideo from '../../Assets/back2.mp4';


const main = () => {
  return (
    <div className="background-container">
        <video autoPlay loop muted>
        <source src={BackgroundVideo} type="video/mp4" />
        </video>
    </div>
  )
}

export default main