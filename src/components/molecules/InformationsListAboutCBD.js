import React from "react";
import { informationsList } from "initialData";
import AboutSectionSingleInformation from "components/molecules/AboutSectionSingleInformation";

const InformationsListAboutCBD = () => (
  <>
    {informationsList.map((information, index) => (
      <AboutSectionSingleInformation
        description={information.description}
        title={information.title}
        image={information.image}
        index={index}
        key={`informationItem:${index}`}
      />
    ))}
  </>
);
export default InformationsListAboutCBD;
