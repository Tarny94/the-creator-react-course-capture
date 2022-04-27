import React from "react";
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="tittle">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>deams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>
          contact us for any photography of videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact us</button>
      </div>
      <div className="image">
        <img src={home1} alt="Guy with a camera" />
      </div>
    </div>
  );
};

export default AboutSection;
