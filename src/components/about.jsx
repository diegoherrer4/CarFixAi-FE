import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img
              src="img/about.jpg"
              className="img-fluid"
              alt=""
              style={{ maxWidth: "100%", maxHeight: "100%"}}
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>HOW IT WORKS</h2>
              <p>
                <strong>1. Select your car details:</strong>
                {props.data ? props.data.paragraph : "loading..."}
              </p>
              <p>
                <strong>2. Symptom Check or Custom Prompt:</strong>
                {props.data ? props.data.paragraph2 : "loading..."}
              </p>
              <p>
                <strong>3. AI Analysis:</strong>
                {props.data ? props.data.paragraph3 : "loading..."}
              </p>
              <p>
                <strong>4. Issue Identification:</strong>
                {props.data ? props.data.paragraph4 : "loading..."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
