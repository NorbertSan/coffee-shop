import React from "react";
import styled, { css } from "styled-components";
import theme from "theme";

const Button = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  background: ${theme.tertiaryColor};
  text-transform: uppercase;
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSize.xs};
  color: ${theme.whiteColor};
  padding: 15px 25px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  ${({ disable }) =>
    disable &&
    css`
      opacity: 0.5;
      pointer-events: none;
      /* curso */
    `}
  ${({ tertiary }) =>
    tertiary &&
    css`
      &:after {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0%;
        border: 2px solid ${theme.tertiaryColor};
        background: ${theme.whiteColor};
        transform: scale(0);
        transform-origin: center;
        z-index: -1;
        transition: all 0.3s ease-in-out;
        ${({ rounded }) =>
          rounded &&
          css`
            border-radius: 30px;
          `}
      }
      &:hover:after,
      &:hover {
        transform: scale(1);
        color: ${theme.tertiaryColor};
      }
    `}
  ${({ secondary }) =>
    secondary &&
    css`
      &:after {
        display: none;
      }
      &:hover {
        color: ${theme.whiteColor} !important;
      }
      background: ${theme.primaryColor};
    `}
  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 30px;
    `}
    
    ${({ small }) =>
      small &&
      css`
        padding: 10px 18px;
        font-size: ${theme.fontSize.xxs};
        font-weight: ${theme.fontWeight.bold};
      `}
`;

export default Button;
