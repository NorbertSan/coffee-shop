import React from "react";
import styled from "styled-components";
import Title from "components/atoms/Title";
import HeroImage from "components/atoms/HeroImage";
import Paragraph from "components/atoms/Paragraph";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  height: 350px;
  align-items: flex-start;
  margin-bottom: 150px;
  grid-gap: 60px;
`;
const StyledInfo = styled.article``;

const AboutSectionSingleInformation = ({
  image,
  description,
  index,
  title
}) => (
  <StyledWrapper>
    {index % 2 === 0 ? (
      <>
        <HeroImage src={image} />
        <StyledInfo>
          <Title>{title}</Title>
          <Paragraph>{description}</Paragraph>
        </StyledInfo>
      </>
    ) : (
      <>
        <StyledInfo>
          <Title>{title}</Title>
          <Paragraph>{description}</Paragraph>
        </StyledInfo>
        <HeroImage src={image} />
      </>
    )}
  </StyledWrapper>
);

export default AboutSectionSingleInformation;
