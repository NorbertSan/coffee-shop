import React from "react";
import styled from "styled-components";
import theme from "theme";

const BestsellerLabel = styled.div`
  width: 100px;
  height: 25px;
  color: ${theme.whiteColor};
  background: ${theme.tertiaryColor};
  transform-origin: left center;
  transform: rotate(30deg);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: ${theme.fontSize.xxs};
  font-weight: ${theme.fontWeight.bold};
  padding-left: 15px;
  &:after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background: ${theme.whiteColor};
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    left: 5px;
  }
`;

export default BestsellerLabel;
