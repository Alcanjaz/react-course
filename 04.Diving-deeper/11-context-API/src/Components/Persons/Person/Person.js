import React, { Component } from "react";

import classes from "./Person.module.css";
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";
import authContext from "../../../context/auth-context";

import propTypes from "prop-types";

//In order to use lifecycle hooks we must change to class-based component
class Person extends Component {
  //in our components, we have a very useful feature to replace the selectors: the refs
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = authContext;

  componentDidMount() {
    this.inputElementRef.current.focus(); //select the last element and focus on it
  }

  render() {
    console.log("[Person.js] rendering...");
    return (
      <Aux>
        {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in :C</p>}
        <p onClick={this.props.click}>
          Hi! I am {this.props.name} and I'm {this.props.age} years old
        </p>
        <input
          type="text"
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

//  If you are writing a React library or working in a development team,
//  the other users may should't know how your component works and make errors
//  e.g: put numbers where we are specting Strings.
//  For that, we have a very useful package: propTypes

Person.propTypes = {
  click: propTypes.func,
  name: propTypes.string,
  changed: propTypes.func,
  age: propTypes.number
};

//With this, if we put another unexpected value, it will log an error!

export default withClass(Person, classes.Person);
