import React, { useState } from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styled";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="tittle">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          contact us for any photography of videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button className="buttonContactUs">Contact us</button>
      </Description>
      <Image>
        <img src={home1} alt="Guy with a camera" />
      </Image>
    </About>
  );
};

export default AboutSection;
