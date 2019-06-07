import React from "react";

import Aux from "../../../hoc/Aux";
import Button from "../../../components/UI/Button/Button";

const orderSumary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your order:</h3>
      <p>A delicious burger the following ingredients: </p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
      <Button clicked={props.modalClosed} buttonType="Danger">
        CANCEL
      </Button>
      <Button buttonType="Success">CONTINUE</Button>
    </Aux>
  );
};

export default orderSumary;
