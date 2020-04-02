import aboutImage1 from "assets/images/aboutcbd1.png";
import aboutImage2 from "assets/images/aboutcbd2.png";
import aboutImage3 from "assets/images/aboutcbd3.png";
import aboutImage4 from "assets/images/aboutcbd4.png";
import jointIcon from "assets/icons/joint.svg";
import bletki1 from "assets/images/ocbbletki.png";
import bletki2 from "assets/images/bletki2.jpg";
import bletki3 from "assets/images/bletki3.jpg";
import bletki4 from "assets/images/bletki4.jpg";
import bongo1 from "assets/images/bongo.jpg";
import bongo2 from "assets/images/bongo2.jpg";
import bongo3 from "assets/images/bongo3.jpg";
import clothes1 from "assets/images/clothes.jfif";
import clothes2 from "assets/images/clothes2.jpg";
import clothes3 from "assets/images/clothes3.jfif";
import olejki1 from "assets/images/olejki1.png";
import olejki2 from "assets/images/olejki2.jpg";
import olejki3 from "assets/images/olejki3.jpg";
import olejki4 from "assets/images/olejki4.png";

export const informationsList = [
  {
    image: aboutImage1,
    title: "Kilka słów o CBD",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, amet aliquid. Animi nihil laborum dolore nisi ipsa, delectus ad molestiae tempora voluptatum aliquam labore ducimus adipisci voluptatem quibusdam soluta, vero earum vel sequi, ut expedita quia at. Adipisci pariatur, illo dignissimos unde reprehenderit ea expedita animi tenetur quasi. Odit, nobis"
  },
  {
    image: aboutImage2,
    title: "Kilka słów o CBD",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, amet aliquid. Animi nihil laborum dolore nisi ipsa, delectus ad molestiae tempora voluptatum aliquam labore ducimus adipisci voluptatem quibusdam soluta, vero earum vel sequi, ut expedita quia at. Adipisci pariatur, illo dignissimos unde reprehenderit ea expedita animi tenetur quasi. Odit, nobis"
  },
  {
    image: aboutImage3,
    title: "Kilka słów o CBD",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, amet aliquid. Animi nihil laborum dolore nisi ipsa, delectus ad molestiae tempora voluptatum aliquam labore ducimus adipisci voluptatem quibusdam soluta, vero earum vel sequi, ut expedita quia at. Adipisci pariatur, illo dignissimos unde reprehenderit ea expedita animi tenetur quasi. Odit, nobis"
  }
];
export const otherPropertiesAboutCBD = [
  {
    image: aboutImage4,
    jointIcon,
    title: "Pozostałe właściwości",
    properties: [
      "Działa na stany lękowe",
      "Łagodzi stany zapalne skóry związane z łuszczycą",
      "Działa pozytywnie na wzrost kości",
      "Łagodzi ból, w tym szczególnie bóle chroniczne",
      "Pomaga w walce z uzależnieniami od narkotyków, opioidowych środków przeciwzapalnych oraz papierosów",
      "Działa pozytywnie na zmiany trądzikowe"
    ]
  }
];
export const types = {
  bletki: "bletki",
  oils: "olejki",
  clothes: "ubrania",
  bongo: "bonga",
  bestseller: "bestseller",
  new: "nowe"
};
const generateID = () => {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};
export const products = [
  {
    type: [types.oils, types.bestseller],
    image: olejki1,
    label: "Cannabis originals olej spectrum CBD+CBDA",
    price: 3.99,
    id: generateID()
  },
  {
    type: [types.oils],
    image: olejki2,
    label: "CBD Biokonopia olej",
    price: 8.99,
    id: generateID()
  },
  {
    type: [types.oils, types.bestseller],
    image: olejki3,
    label: "CBD/CBDA Endoca olej RAW",
    price: 10.99,
    id: generateID()
  },
  {
    type: [types.oils, types.new],
    image: olejki4,
    label: "CBD CannabiGold olej",
    price: 12.49,
    id: generateID()
  },
  {
    type: [types.bletki],
    image: bletki1,
    label: "​BIBUŁKI RAW CONE CLASSIC RAWKED 5",
    price: 0.99,
    id: generateID()
  },
  {
    type: [types.bletki, types.bestseller],
    image: bletki2,
    label: "Bibułka OCB Premium 1 1/4",
    price: 1.39,
    id: generateID()
  },
  {
    type: [types.bletki, types.bestseller],
    image: bletki3,
    label: "Bibułka OCB Organic Hemp",
    price: 2.99,
    id: generateID()
  },
  {
    type: [types.bletki, types.new],
    image: bletki4,
    label: "Bibułka OCB No.8 Zielona",
    price: 3.99,
    id: generateID()
  },
  {
    type: [types.clothes],
    image: clothes1,
    label: "czapka cbd",
    price: 24.99,
    id: generateID()
  },
  {
    type: [types.clothes],
    image: clothes2,
    label: "czabka cbd limit edition",
    price: 44.99,
    id: generateID()
  },
  {
    type: [types.clothes, types.bestseller],
    image: clothes3,
    label: "bluza cbd",
    price: 48.99,
    id: generateID()
  },
  {
    type: [types.bongo],
    image: bongo1,
    label: "Bongo szklane H 30 cm szlif 14,5 mm",
    price: 44.99,
    id: generateID()
  },
  {
    type: [types.bongo, types.bestseller, types.new],
    image: bongo2,
    label: "Bongo szklane, H 39 cm szlif 14,5 mm",
    price: 24.99,
    id: generateID()
  },
  {
    type: [types.bletki, types.new],
    image: bongo3,
    label: "Bongo szklane H 22 szlif 18,8",
    price: 34.99,
    id: generateID()
  }
];

export const codesTypes = {
  rabats: {
    tenPercent: 10,
    twentyPercent: 20
  }
};

export const codes = [
  {
    type: codesTypes.rabats.tenPercent,
    code: "10_cbd"
  },
  {
    type: codesTypes.rabats.twentyPercent,
    code: "20_cbd"
  }
];
