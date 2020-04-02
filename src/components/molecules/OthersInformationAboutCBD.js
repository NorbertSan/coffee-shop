import React from "react";
import { otherPropertiesAboutCBD } from "initialData";
import SingleInformationAboutCBD from "components/molecules/SingleInformationAboutCBD";

const OthersInformationAboutCBD = () => (
  <>
    {otherPropertiesAboutCBD.map((commonInfo, index) => (
      <SingleInformationAboutCBD
        commonInfo={commonInfo}
        key={`aboutCBD:${index}`}
      />
    ))}
  </>
);

export default OthersInformationAboutCBD;
