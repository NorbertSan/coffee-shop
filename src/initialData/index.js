import aboutImage1 from "assets/images/aboutcbd1.png";
import aboutImage2 from "assets/images/aboutcbd2.png";
import aboutImage3 from "assets/images/aboutcbd3.png";
import aboutImage4 from "assets/images/aboutcbd4.png";
import jointIcon from "assets/icons/joint.svg";
import ocbImage from "assets/images/ocbbletki.png";

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
      "Łagodzenie nudności i zwiększanie apetytu",
      "Łagodzenie nudności i zwiększanie apetytu",
      "Łagodzenie nudności i zwiększanie apetytu",
      "Łagodzenie nudności i zwiększanie apetytu",
      "Łagodzenie nudności i zwiększanie apetytu",
      "Łagodzenie nudności i zwiększanie apetytu"
    ]
  }
];
export const bestsellers = [
  {
    image: ocbImage,
    label: "BIBUŁKI OCB BLACK KING"
  },
  {
    image: ocbImage,
    label: "BIBUŁKI OCB BLACK KING"
  },
  {
    image: ocbImage,
    label: "BIBUŁKI OCB BLACK KING"
  }
];
export const types = {
  bletki: "bletki"
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
    type: types.bletki,
    image: ocbImage,
    label: "BIBUŁKI OCB BLACK KING",
    price: 4.99,
    id: generateID()
  },
  {
    type: types.bletki,
    image: ocbImage,
    label: "BIBUŁKI OCB BLACK KING",
    price: 4.99,
    id: generateID()
  },
  {
    type: types.bletki,
    image: ocbImage,
    label: "BIBUŁKI OCB BLACK KING",
    price: 4.99,
    id: generateID()
  },
  {
    type: types.bletki,
    image: ocbImage,
    label: "BIBUŁKI OCB BLACK KING",
    price: 4.99,
    id: generateID()
  },
  {
    type: types.bletki,
    image: ocbImage,
    label: "BIBUŁKI OCB BLACK KING",
    price: 4.99,
    id: generateID()
  },
  {
    type: types.bletki,
    image: ocbImage,
    label: "BIBUŁKI OCB BLACK KING",
    price: 4.99,
    id: generateID()
  },
  {
    type: types.bletki,
    image: ocbImage,
    label: "BIBUŁKI OCB BLACK KING",
    price: 4.99,
    id: generateID()
  },
  {
    type: types.bletki,
    image: ocbImage,
    label: "BIBUŁKI OCB BLACK KING",
    price: 4.99,
    id: generateID()
  },
  {
    type: types.bletki,
    image: ocbImage,
    label: "BIBUŁKI OCB BLACK KING",
    price: 4.99,
    id: generateID()
  },
  {
    type: types.bletki,
    image: ocbImage,
    label: "BIBUŁKI OCB BLACK KING",
    price: 4.99,
    id: generateID()
  },
  {
    type: types.bletki,
    image: ocbImage,
    label: "BIBUŁKI OCB BLACK KING",
    price: 4.99,
    id: generateID()
  },
  {
    type: types.bletki,
    image: ocbImage,
    label: "BIBUŁKI OCB BLACK KING",
    price: 4.99,
    id: generateID()
  },
  {
    type: types.bletki,
    image: ocbImage,
    label: "BIBUŁKI OCB BLACK KING",
    price: 4.99,
    id: generateID()
  },
  {
    type: types.bletki,
    image: ocbImage,
    label: "BIBUŁKI OCB BLACK KING",
    price: 4.99,
    id: generateID()
  }
];
