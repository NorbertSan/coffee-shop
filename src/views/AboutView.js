import React from "react";
import styled from "styled-components";
import HeroImage from "components/atoms/HeroImage";
import HeroImageContainer from "components/atoms/HeroImageContainer";
import aboutViewImage from "assets/images/photo5.jpg";
import AboutSection from "components/organisms/AboutSection";

const StyledWrapper = styled.div``;
const StyledHeroImageContainer = styled(HeroImageContainer)`
  height: 25vh;
  margin-bottom: 100px;
`;

const AboutView = () => (
  <StyledWrapper>
    <StyledHeroImageContainer>
      <HeroImage src={aboutViewImage} active alt="cbd oil" />
    </StyledHeroImageContainer>
    <AboutSection />
  </StyledWrapper>
);

export default AboutView;
