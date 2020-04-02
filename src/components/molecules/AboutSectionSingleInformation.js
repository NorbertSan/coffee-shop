import React from "react";
import styled from "styled-components";
import theme from "theme";
import Title from "components/atoms/Title";
import Paragraph from "components/atoms/Paragraph";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  margin-bottom: 120px;
  justify-items: center;
  align-items: center;
  @media screen and (max-width: ${theme.mediaQueries.phone}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
const StyledInfo = styled.article``;
const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
`;
const StyledTitle = styled(Title)`
  text-align: center;
`;

const AboutSectionSingleInformation = ({
  image,
  description,
  index,
  title
}) => (
  <StyledWrapper>
    {index % 2 === 0 ? (
      <>
        <StyledImage src={image} />
        <StyledInfo>
          <StyledTitle>{title}</StyledTitle>
          <Paragraph>{description}</Paragraph>
        </StyledInfo>
      </>
    ) : (
      <>
        <StyledInfo>
          <StyledTitle>{title}</StyledTitle>
          <Paragraph>{description}</Paragraph>
        </StyledInfo>
        <StyledImage src={image} />
      </>
    )}
  </StyledWrapper>
);

export default AboutSectionSingleInformation;
