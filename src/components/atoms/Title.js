import React from "react";
import theme from "theme";
import styled, { css } from "styled-components";

const Title = styled.h2`
  font-size: ${theme.fontSize.l};
  ${({ big }) =>
    big &&
    css`
      font-size: ${theme.fontSize.xl};
    `}

  ${({ small }) =>
    small &&
    css`
      font-size: ${theme.fontSize.xs};
      text-transform: uppercase;
    `}
`;

export default Title;
