import React from "react";
import styled from "styled-components";
import Title from "components/atoms/Title";
import Icon from "components/atoms/Icon";
import weedIcon from "assets/icons/weed.svg";

const StyledIcon = styled(Icon)`
  margin-bottom: 55px;
`;
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  text-align: center;
`;

const HomeSection = () => (
  <StyledSection>
    <Title big>Coffee Shop Kraków</Title>
    <StyledIcon urlIcon={weedIcon} />
    <Title>Nasze produkty należą do najbardziej innowacyjnych w Polsce.</Title>
    <StyledIcon urlIcon={weedIcon} />
    <Title>Wszystkie produkty są w 100% legalne.</Title>
    <StyledIcon urlIcon={weedIcon} />
  </StyledSection>
);
export default HomeSection;
