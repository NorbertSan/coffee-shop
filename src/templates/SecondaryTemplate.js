import React from "react";
import Navigation from "components/molecules/Navigation";

const SecondaryTemplate = ({ children }) => (
  <>
    <Navigation />
    {children}
  </>
);

export default SecondaryTemplate;
