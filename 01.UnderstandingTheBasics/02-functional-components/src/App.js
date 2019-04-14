import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; //We can import components from other files

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is a React App</h1>
        <Person />
      </div>
    );
  }
}

export default App;
