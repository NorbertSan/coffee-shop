import React from "react";
import styled, { keyframes } from "styled-components";
import theme from 'theme'
import mainViewImage from "assets/images/photo1.jpg";
import mainViewImage2 from "assets/images/photo4.jpg";
import HeroImage from "components/atoms/HeroImage";
import Paragraph from "components/atoms/Paragraph";
import HeroImageContainer from "components/atoms/HeroImageContainer";
import HomeSection from "components/organisms/HomeSection";
import BestsellersSection from "components/organisms/BestsellersSection";

const appear = keyframes`
  0%{
    opacity:0.5;
    transform:translateY(-50px);

  } 100%{
    opacity:1;
  }
`;

const StyledWrapper = styled.div`
  animation: ${appear} 0.3s ease-in-out;
`;

const StyledHeroImageContainer = styled(HeroImageContainer)`
  height: 70vh;
`;
const StyledInnerWrapper = styled.div`
  width: 60%;
  margin: auto;
  @media screen and (max-width:${theme.mediaQueries.tablet}){
    width:80%;
  }
`;
const StyledParagraph = styled(Paragraph)`
  width: 80%;
  margin: 30px auto;
`;

class HomeView extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <StyledWrapper>
        <StyledHeroImageContainer>
          <HeroImage src={mainViewImage} active alt="weed in jar" />
        </StyledHeroImageContainer>
        <StyledInnerWrapper>
          <HomeSection />
          <BestsellersSection />
          <StyledParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            tempora porro nostrum neque libero sunt laborum reiciendis obcaecati
            ducimus? Odit dolor minus voluptates sint quos, tempora esse
            inventore perspiciatis? Dolore amet aspernatur culpa pariatur
            eveniet alias harum recusandae eius quibusdam.Dolore amet aspernatur
            culpa pariatur eveniet alias harum recusandae eius quibusdam.
          </StyledParagraph>
          <StyledHeroImageContainer>
            <HeroImage src={mainViewImage2} />
          </StyledHeroImageContainer>
          <StyledParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            tempora porro nostrum neque libero sunt laborum reiciendis obcaecati
            ducimus? Odit dolor minus voluptates sint quos, tempora esse
            inventore perspiciatis? Dolore amet aspernatur culpa pariatur
            eveniet alias harum recusandae eius quibusdam. Dolore amet
            aspernatur culpa pariatur eveniet alias harum recusandae eius
            quibusdam.
          </StyledParagraph>
        </StyledInnerWrapper>
      </StyledWrapper>
    );
  }
}

export default HomeView;
