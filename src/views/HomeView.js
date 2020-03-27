import React from "react";
import styled from "styled-components";
import mainViewImage from "assets/images/photo1.jpg";
import HeroImage from "components/atoms/HeroImage";
import HeroImageContainer from "components/atoms/HeroImageContainer";

const StyledWrapper = styled.div``;

const StyledHeroImageContainer = styled.div`
  height: 70vh;
`;

const HomeView = () => (
  <StyledWrapper>
    <StyledHeroImageContainer>
      <HeroImage src={mainViewImage} active />
    </StyledHeroImageContainer>
  </StyledWrapper>
);

export default HomeView;
