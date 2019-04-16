import React, { Component } from 'react';
import './App.css';

import UserOutput from './IO/UserOutput';
import UserInput from './IO/UserInput';

class App extends Component {
  state = {
    username: "Test"
  }

  inputUsernameHandler = (event) => {
    return this.setState({
      username: event.target.value
    })
  }


  render() {
    return (
      <div className="App">
        <h1>This is a React App</h1>
        <UserInput 
        input = {this.inputUsernameHandler}
        currentName = {this.state.username} 
        />
        <UserOutput text="Hello check this :O" />
        <UserOutput text = {this.state.username} />
      </div>
    );
  }
}

export default App;
