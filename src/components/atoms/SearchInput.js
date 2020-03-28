import React from "react";
import styled from "styled-components";
import theme from "theme";

const SearchInput = styled.input`
  padding: 12px 25px;
  border-radius: 30px;
  background: ${theme.whiteColor};
  border: 1px solid ${theme.primaryColor};
  outline: none;
`;
export default SearchInput;
