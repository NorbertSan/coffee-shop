import React from "react";
import { connect } from "react-redux";
import BestsellerItem from "components/molecules/BestsellerItem";
import styled, { css } from "styled-components";
import Icon from "components/atoms/Icon";
import backwardIcon from "assets/icons/backward2.svg";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  margin-bottom: 70px;
  grid-gap: 20px;
  position: relative;
`;
const StyledLeftIcon = styled(Icon)`
  position: absolute;
  left: -50px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9;
  cursor: pointer;
  ${({ disable }) =>
    disable &&
    css`
      opacity: 0.2;
    `}
`;
const StyledRightIcon = styled(Icon)`
  cursor: pointer;
  position: absolute;
  right: -50px;
  top: 50%;
  transform: translateY(-50%) rotate(180deg);
  z-index: 9;
  ${({ disable }) =>
    disable &&
    css`
      opacity: 0.2;
    `}
`;

class BestsellersItemList extends React.Component {
  state = {
    position: 0
  };
  shiftSlider = direction => {
    const { position } = this.state;
    const { bestsellers } = this.props;
    if (direction === "left" && position > 0)
      this.setState(prevState => ({
        position: prevState.position--
      }));
    else if (direction === "right" && position + 3 < bestsellers.length)
      this.setState(prevState => ({
        position: prevState.position++
      }));
  };
  render() {
    const { position } = this.state;
    const { bestsellers } = this.props;
    const shiftSlider = this.shiftSlider;
    return (
      <StyledWrapper>
        <StyledLeftIcon
          disable={position === 0}
          onClick={() => shiftSlider("left")}
          small
          urlIcon={backwardIcon}
        />
        <StyledRightIcon
          disable={bestsellers.length - 3 === position}
          onClick={() => shiftSlider("right")}
          small
          urlIcon={backwardIcon}
        />
        {bestsellers.slice(position, position + 3).map(item => (
          <BestsellerItem
            key={`bestseller:${item.id}`}
            id={item.id}
            image={item.image}
            label={item.label}
          />
        ))}
      </StyledWrapper>
    );
  }
}

const mapStateToProps = state => ({
  bestsellers: state.products.bestsellers
});

export default connect(mapStateToProps)(BestsellersItemList);
