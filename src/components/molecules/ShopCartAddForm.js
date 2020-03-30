import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addProduct } from "actions/shoppingActions";
import { fetchSingleProduct } from "actions/productsActions";
import Button from "components/atoms/Button";

const StyledInputField = styled.form`
  display: flex;
`;
const StyledInput = styled.input`
  width: 60px;
  padding: 10px;
  margin-right: 15px;
`;

class ShopCartAddForm extends React.Component {
  state = {
    value: 1
  };
  changeValue = e => {
    this.setState({
      value: e.target.value
    });
  };
  addItem = (e, id) => {
    const { filterItem, setRedirect } = this.props;
    e.preventDefault();
    const amount = parseInt(e.target[0].value);
    if (Number.isInteger(amount) && amount >= 1) {
      this.props.fetchSingleProduct(id);
      if (filterItem) {
        filterItem.amount = amount;
        this.props.addProduct(filterItem);
      }
      setRedirect();
    }
  };
  render() {
    const changeValue = this.changeValue;
    const { value } = this.state;
    const { id } = this.props;
    const addItem = this.addItem;
    return (
      <StyledInputField onSubmit={e => addItem(e, id)}>
        <StyledInput
          type="number"
          min="1"
          step="1"
          value={value}
          onChange={e => changeValue(e)}
        />
        <Button type="submit" secondary>
          Dodaj do koszyka
        </Button>
      </StyledInputField>
    );
  }
}

const mapStateToProps = state => ({
  filterItem: state.products.filterItem
});

export default connect(mapStateToProps, { addProduct, fetchSingleProduct })(
  ShopCartAddForm
);
