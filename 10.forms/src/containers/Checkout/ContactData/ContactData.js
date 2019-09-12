import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import Loader from "../../../components/UI/Loader/Loader";
import axios from "../../../axios-orders";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    adress: {
      street: "",
      postalCode: ""
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: "Alexis Ezequiel Schmoker",
        address: {
          street: "test street 1",
          zipCode: "3500",
          country: "Argentina"
        },
        deliveryMethod: "fastest"
      }
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        console.log(response);
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <Input inputtype="text" name="name" placeholder="Your name" />
        <Input inputtype="text" name="email" placeholder="Your email" />
        <Input inputtype="text" name="street" placeholder="Your Street" />
        <Input inputtype="text" name="postal" placeholder="Your Postal Code" />
        <Button buttonType="Success" clicked={this.orderHandler}>
          CONTINUE
        </Button>
      </form>
    );

    if (this.state.loading) {
      form = <Loader />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
