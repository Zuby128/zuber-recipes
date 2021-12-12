import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyle";
import zupermanColor from "../../assets/zuperman-color.png";

const About = () => {
  return (
    <AboutContainer>
      <StyledImage src={zupermanColor} alt="coding" />
      <HeaderContainer>
        <h1>
          About Me ...
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
