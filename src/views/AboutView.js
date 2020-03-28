import React from "react";
import styled, { keyframes } from "styled-components";
import HeroImage from "components/atoms/HeroImage";
import HeroImageContainer from "components/atoms/HeroImageContainer";
import aboutViewImage from "assets/images/photo5.jpg";
import AboutSection from "components/organisms/AboutSection";

const appear = keyframes`
  0%{
    opacity:0.5;
    transform:translateY(50px);
  } 100%{
    opacity:1;
  }
`;
const StyledWrapper = styled.div`
  animation: ${appear} 0.3s ease-in-out;
`;
const StyledHeroImageContainer = styled(HeroImageContainer)`
  height: 20vh;
  margin-bottom: 100px;
`;

class AboutView extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <StyledWrapper>
        <StyledHeroImageContainer>
          <HeroImage src={aboutViewImage} active alt="cbd oil" />
        </StyledHeroImageContainer>
        <AboutSection />
      </StyledWrapper>
    );
  }
}

export default AboutView;
