import React from "react";
// Correct the import path
import "./main.css";

const main = () => {
  return (
    <div className="background-container">
      <video autoPlay muted loop id="myVideo">
        <source src="/back2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default main;
