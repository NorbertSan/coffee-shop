import React from "react";
import styled, { keyframes } from "styled-components";
import Icon from "components/atoms/Icon";
import arrowUpIcon from "assets/icons/arrowUp.svg";

const bounce = keyframes`
  0%{
    transform:translateY(0px) translateX(-50%);
    opacity:0;
  }
  50%{
    opacity:1;
  }
  100%{
    transform:translateY(-20px) translateX(-50%);
    opacity:0;
  }
`;
const StyledIcon = styled(Icon)`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  animation: ${bounce} 3s ease-in-out infinite;
`;
const StyledIcon2 = styled(StyledIcon)`
  animation-delay: 1.5s;
`;
const StyledArrowUpButton = styled.button`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const ArrowUpButton = () => {
  const goToUp = () => window.scrollTo(0, 0);
  return (
    <StyledArrowUpButton onClick={goToUp}>
      <StyledIcon small urlIcon={arrowUpIcon} />
      <StyledIcon2 small urlIcon={arrowUpIcon} />
    </StyledArrowUpButton>
  );
};

export default ArrowUpButton;
