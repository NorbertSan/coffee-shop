import React from "react";
import styled, { css } from "styled-components";

const Icon = styled.svg`
  width: 40px;
  height: 40px;
  background: url(${({ urlIcon }) => urlIcon});
  background-size: 100%;
  ${({ small }) =>
    small &&
    css`
      width: 25px;
      height: 25px;
      margin: 5px;
    `}
`;

export default Icon;
