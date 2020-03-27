import React from "react";
import styled from "styled-components";
import mainViewImage from "assets/images/photo1.jpg";
import mainViewImage2 from "assets/images/photo4.jpg";
import HeroImage from "components/atoms/HeroImage";
import Paragraph from "components/atoms/Paragraph";
import HeroImageContainer from "components/atoms/HeroImageContainer";
import HomeSection from "components/organisms/HomeSection";
import BestsellersSection from "components/organisms/BestsellersSection";

const StyledWrapper = styled.div``;

const StyledHeroImageContainer = styled(HeroImageContainer)`
  height: 70vh;
`;
const StyledInnerWrapper = styled.div`
  width: 60%;
  margin: auto;
`;
const StyledParagraph = styled(Paragraph)`
  width: 80%;
  margin: 30px auto;
`;

const HomeView = () => (
  <StyledWrapper>
    <StyledHeroImageContainer>
      <HeroImage src={mainViewImage} active />
    </StyledHeroImageContainer>
    <StyledInnerWrapper>
      <HomeSection />
      <BestsellersSection />
      <StyledParagraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tempora
        porro nostrum neque libero sunt laborum reiciendis obcaecati ducimus?
        Odit dolor minus voluptates sint quos, tempora esse inventore
        perspiciatis? Dolore amet aspernatur culpa pariatur eveniet alias harum
        recusandae eius quibusdam.Dolore amet aspernatur culpa pariatur eveniet
        alias harum recusandae eius quibusdam.
      </StyledParagraph>
      <StyledHeroImageContainer>
        <HeroImage src={mainViewImage2} />
      </StyledHeroImageContainer>
      <StyledParagraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tempora
        porro nostrum neque libero sunt laborum reiciendis obcaecati ducimus?
        Odit dolor minus voluptates sint quos, tempora esse inventore
        perspiciatis? Dolore amet aspernatur culpa pariatur eveniet alias harum
        recusandae eius quibusdam. Dolore amet aspernatur culpa pariatur eveniet
        alias harum recusandae eius quibusdam.
      </StyledParagraph>
    </StyledInnerWrapper>
  </StyledWrapper>
);

export default HomeView;
