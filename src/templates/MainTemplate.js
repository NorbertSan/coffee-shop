import React from "react";
import Navigation from "components/molecules/Navigation";
import Footer from "components/molecules/Footer";

const MainTemplate = ({ children }) => (
  <>
    <Navigation />
    {children}
    <Footer />
  </>
);

export default MainTemplate;
