import React from "react";
import styled, { keyframes, css } from "styled-components";

const zoom = keyframes`
    0%{
        transform:scale(1.15);
    }
    100%{
        
        transform:scale(1);
    }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  transform: scale(1);
  object-fit: cover;
  ${({ active }) =>
    active &&
    css`
      animation: ${zoom} 12s ease-in-out infinite alternate;
    `}
`;
export default HeroImage;
