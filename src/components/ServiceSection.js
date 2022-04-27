import React from "react";
//Import icon
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

const ServiceSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          <span>quality</span> services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img alt="icon" src={clock} />
              <h3>Efficent</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img alt="icon" src={money} />
              <h3>Affordable</h3>
            </div>
            <p>Lorem know how important are yours economies.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img alt="icon" src={diaphragm} />
              <h3>Pro Grande Gear</h3>
            </div>
            <p>Lorem work with profesional tools.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img alt="icon" src={teamwork} />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem work in a team of professionals.</p>
          </div>
        </div>
      </div>
      <img src={home2} alt="camera" />
    </div>
  );
};

export default ServiceSection;
