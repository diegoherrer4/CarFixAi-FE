import React from "react";
import CarForm from "./CarForm";
import "./Team.css"; 

export const Team = (props) => {
  return (
    <div id="team" className="team-container">
      <div className="container">
        <div className="section-title">
          <h2>Get Started</h2>
          <p>
            Please enter your car details
          </p>
        </div>
        <div id="car-form-container" className="car-form-container">
          <CarForm />
        </div>
      </div>
    </div>
  );
};

