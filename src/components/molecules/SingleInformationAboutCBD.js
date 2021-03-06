import React from "react";
import styled from "styled-components";
import Title from "components/atoms/Title";
import Paragraph from "components/atoms/Paragraph";
import Icon from "components/atoms/Icon";
import theme from "theme";
import HeroImage from "components/atoms/HeroImage";

const StyledOtherPropertyWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const StyledLi = styled.li`
  display: flex;
  align-items: center;
`;
const StyledIcon = styled(Icon)`
  margin-right: 10px;
`;
const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledWrapperProperties = styled.div``;
const StyledTitle = styled(Title)`
  color: ${theme.primaryColor};
  text-decoration: none;
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSize.xxs};
  font-style: italic;
`;
const StyledHeroImage = styled(HeroImage)`
  margin-top: 50px;
`;

const SingleInformationAboutCBD = ({ commonInfo }) => (
  <StyledInnerWrapper>
    <StyledWrapperProperties>
      <Title>{commonInfo.title}</Title>
      <StyledOtherPropertyWrapper>
        {commonInfo.properties.map((property, index) => (
          <StyledLi key={`propertyCBD:${index}`}>
            <StyledIcon small urlIcon={commonInfo.jointIcon} />
            <Paragraph>{property}</Paragraph>
          </StyledLi>
        ))}
        <StyledTitle
          href="https://testosterone.pl/wiedza/cbd/"
          target="_blank"
          as={"a"}
          small
        >
          Zobacz więcej tutaj
        </StyledTitle>
      </StyledOtherPropertyWrapper>
    </StyledWrapperProperties>
    <StyledHeroImage src={commonInfo.image} />
  </StyledInnerWrapper>
);

export default SingleInformationAboutCBD;
