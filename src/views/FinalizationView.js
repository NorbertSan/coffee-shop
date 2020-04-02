import React from "react";
import styled from "styled-components";
import theme from "theme";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSize.l};
`;

const FinalizationView = () => (
  <StyledWrapper>
    Dzięki,że przekopałeś tą stronę.Na razie tutaj nic nie ma, na razie ;).
  </StyledWrapper>
);

export default FinalizationView;
