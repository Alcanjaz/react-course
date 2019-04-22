import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; //We can import components from other files

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is a React App</h1>
        <Person age="25" name="Juan"/>
        <Person age="18" name="María"> My Hobbies: Read. </Person>
        <Person age="78" name="Rogelio"/>
      </div>
    );
  }
}

export default App;
