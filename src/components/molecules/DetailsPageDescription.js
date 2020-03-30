import React from "react";
import styled, { css } from "styled-components";
import Paragraph from "components/atoms/Paragraph";
import Title from "components/atoms/Title";
import theme from "theme";

const content = {
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quam asperiores ab laudantium tenetur exercitationem, eius consequuntur, beatae reiciendis velit maiores et ratione ea? Recusandae obcaecati natus dolore blanditiis ducimus unde ea, repudiandae, veritatis qui ex dignissimos quis magnam itaque ad consequatur assumenda inventore molestias eum perferendis magni voluptatem doloribus libero? Repellat eos voluptate suscipit vel saepe nihil officiis aliquid repellendus voluptatibus et ipsam voluptates praesentium, eius dolorum quis molestias vero cupiditate molestiae quo laborum numquam dolor dicta! Eos eligendi pariatur voluptates rerum quis molestiae qui ipsum unde, nihil modi voluptas vitae non consectetur nisi corporis aliquam. Ducimus, voluptatibus laboriosam!",
  purpose:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolorem velit ratione quos, provident at, explicabo sint aperiam eveniet sunt eligendi suscipit nulla odio vel, beatae labore dolor dolores rem quisquam. Provident accusantium omnis quia, aliquid dignissimos vero rem ipsa quibusdam cum eos sint! Quisquam ipsam quod aliquid officiis ad exercitationem suscipit repellat aspernatur omnis optio odio doloremque deserunt, eos officia inventore culpa, dolorem nisi eligendi itaque nesciunt unde sapiente!"
};

const StyledWrapper = styled.div`
  grid-column: 1/3;
`;
const StyledBar = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;
const StyledTitle = styled(Title)`
  cursor: pointer;
  font-size: ${theme.fontSize.m};
  font-weight: ${theme.fontWeight.bold};
  padding: 0 40px;
  border-left: 3px solid ${theme.primaryColor};
  position: relative;
  ${({ active }) =>
    active &&
    css`
      &:after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 50%;
        height: 3px;
        border-radius: 50px;
        background: ${theme.primaryColor};
      }
    `}
`;
const StyledParagraph = styled(Paragraph)`
  line-height: 35px;
  margin-top: 50px;
`;
class DetailsPageDescription extends React.Component {
  state = {
    type: "description"
  };
  changeContent(type) {
    this.setState({
      type
    });
  }
  render() {
    const { type } = this.state;
    return (
      <StyledWrapper>
        <StyledBar>
          <StyledTitle
            onClick={() => this.changeContent("description")}
            active={type === "description"}
            as={"li"}
          >
            Opis
          </StyledTitle>
          <StyledTitle
            active={type === "purpose"}
            onClick={() => this.changeContent("purpose")}
            as={"li"}
          >
            Zastosowanie
          </StyledTitle>
        </StyledBar>
        <StyledParagraph>{content[type]}</StyledParagraph>
      </StyledWrapper>
    );
  }
}

export default DetailsPageDescription;
