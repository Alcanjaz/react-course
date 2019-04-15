import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; //We can import components from other files

class App extends Component {
  state = {
    persons: [
      {name:"Juan", age:"25"},
      {name:"María", age:"18"},
      {name:"Rogelio", age:"78"}
    ]
  }

  nameSwitchHandler = () => {
    // console.warn("Was clicked!! :O");
    //DON'T DO THIS: this.state.persons[0].name = "Alexis"
    this.setState({
      persons: [
        {name:"Juan Ignacio", age:"25"},
        {name:"María", age:"18"},
        {name:"Rogelio", age:"63"}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>This is a React App</h1>
        <button onClick={this.nameSwitchHandler}>Switch Name</button>
        <Person age={this.state.persons[0].age} name={this.state.persons[0].name}/>
        <Person age={this.state.persons[1].age} name={this.state.persons[1].name}> My Hobbies: Read. </Person>
        <Person age={this.state.persons[2].age} name={this.state.persons[2].name}/>
      </div>
    );
  }
}

export default App;
