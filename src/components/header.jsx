import React from "react";
import './header.css' 



export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p><strong className="lessBold">{props.data ? props.data.paragraph : "Loading"}</strong></p>
                <a
                  href="#Team"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Get Started
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
