import React from "react";
import styled from "styled-components";
import theme from "theme";

const Paragraph = styled.p`
  line-height: 40px;
  font-size: ${theme.fontSize.s};
  @media screen and (max-width: ${theme.mediaQueries.ipad}) {
    line-height: 25px;
  }
`;
export default Paragraph;
