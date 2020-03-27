import React from "react";
import styled from "styled-components";
import theme from "theme";

const ItemLabel = styled.label`
  font-size: ${theme.fontSize.xs};
  font-weight: ${theme.fontWeight.bold};
  text-transform: uppercase;
`;

export default ItemLabel;
