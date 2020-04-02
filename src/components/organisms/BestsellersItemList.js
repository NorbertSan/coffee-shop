import React from "react";
import { connect } from "react-redux";
import theme from "theme";
import BestsellerItem from "components/molecules/BestsellerItem";
import styled, { css } from "styled-components";
import Icon from "components/atoms/Icon";
import backwardIcon from "assets/icons/backward2.svg";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ amountOfItems }) => amountOfItems}, 1fr);
  align-items: center;
  justify-items: center;
  margin-bottom: 70px;
  grid-gap: 20px;
  position: relative;
`;
const StyledLeftIcon = styled(Icon)`
  position: absolute;
  left: -10px;
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
  right: -10px;
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
    position: 0,
    amountOfItems: 3
  };
  componentDidMount() {
    this.documentListener(window.innerWidth);
    this.setAmountOfItems(null, window.innerWidth);
  }
  shiftSlider = direction => {
    const { position, amountOfItems } = this.state;
    const { bestsellers } = this.props;
    if (direction === "left" && position > 0)
      this.setState(prevState => ({
        position: prevState.position--
      }));
    else if (
      direction === "right" &&
      position + amountOfItems < bestsellers.length
    )
      this.setState(prevState => ({
        position: prevState.position++
      }));
  };
  setAmountOfItems = (e, presentWidth) => {
    let innerWidth;
    if (presentWidth) innerWidth = presentWidth;
    else {
      const target = e.currentTarget;
      innerWidth = target.innerWidth;
    }
    if (1100 <= innerWidth) this.setState({ amountOfItems: 3, position: 0 });
    if (600 < innerWidth && innerWidth < 1100)
      this.setState({ amountOfItems: 2, position: 0 });
    if (innerWidth <= 600) this.setState({ amountOfItems: 1, position: 0 });
  };
  documentListener = presentWidth => {
    window.addEventListener("resize", e => this.setAmountOfItems(e));
  };
  render() {
    const { position, amountOfItems } = this.state;
    const { bestsellers } = this.props;
    const shiftSlider = this.shiftSlider;
    return (
      <StyledWrapper amountOfItems={amountOfItems}>
        <StyledLeftIcon
          disable={position === 0}
          onClick={() => shiftSlider("left")}
          small
          urlIcon={backwardIcon}
        />
        <StyledRightIcon
          disable={bestsellers.length - amountOfItems === position}
          onClick={() => shiftSlider("right")}
          small
          urlIcon={backwardIcon}
        />
        {bestsellers.slice(position, position + amountOfItems).map(item => (
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
