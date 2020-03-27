import React from "react";
import styled from "styled-components";

const Icon = styled.svg`
  width: 40px;
  height: 40px;
  background: url(${({ urlIcon }) => urlIcon});
  background-size: 100%;
`;

export default Icon;
