import React from "react";
import styled from "styled-components";
import InformationsListAboutCBD from "components/molecules/InformationsListAboutCBD";
import OthersInformationAboutCBD from "components/molecules/OthersInformationAboutCBD";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: auto;
  justify-content: center;
`;

const AboutSection = () => (
  <StyledWrapper>
    <InformationsListAboutCBD />
    <OthersInformationAboutCBD />
  </StyledWrapper>
);

export default AboutSection;
