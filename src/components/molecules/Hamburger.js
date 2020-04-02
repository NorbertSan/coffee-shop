import React from "react";
import styled, { css } from "styled-components";
import theme from "theme";

const StyledButton = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  background: none;
  position: relative;
  justify-self: flex-end;
  cursor: pointer;
  outline: none;
  display: none;
  @media screen and (max-width: ${theme.mediaQueries.ipad}) {
    display: inline-block;
  }
`;
const StyledWrapper = styled.div`
  position: absolute;
  transition: 300ms;
  width: 100%;
  left: 0;
  height: 4px;
  background: ${theme.secondaryColor};
  margin: 0;
  padding: 0;
  border-radius: 30px;
  &:after,
  &:before {
    content: "";
    position: absolute;
    left: 0%;
    width: 100%;
    height: 4px;
    background: ${theme.secondaryColor};
    border-radius: 30px;
    z-index: 9;
    transition: 400ms;
  }
  &:after {
    top: 9px;
  }
  &:before {
    top: -9px;
  }
  ${({ active }) =>
    active &&
    css`
      background: transparent;
      &:after {
        transform: translateY(-9px) rotate(-45deg);
      }
      &:before {
        transform: translateY(9px) rotate(45deg);
      }
    `}
`;

const Hamburger = ({ active, toogleHamburger }) => (
  <StyledButton onClick={toogleHamburger}>
    <StyledWrapper active={active}></StyledWrapper>
  </StyledButton>
);

export default Hamburger;
