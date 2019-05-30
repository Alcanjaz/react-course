import React, { Component } from "react";

import Aux from '../../../hoc/Aux';

//In order to use lifecycle hooks we must change to class-based component
class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      <Aux>
        <p onClick={this.props.click}>
          Hi! I am {this.props.name} and I'm {this.props.age} years old
        </p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

export default Person;
