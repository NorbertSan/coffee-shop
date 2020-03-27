import React from "react";
import styled from "styled-components";
import Icon from "components/atoms/Icon";
import Title from "components/atoms/Title";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SocialMediaItem = ({ icon, title }) => (
  <StyledWrapper>
    <Icon urlIcon={icon} small />
    <Title small>{title}</Title>
  </StyledWrapper>
);

export default SocialMediaItem;
