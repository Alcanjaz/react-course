import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

//However, we use more often the Class based component
class App extends Component {
  state = {
    persons: [
      {name:"Juan", age:"25"},
      {name:"María", age:"18"},
      {name:"Rogelio", age:"78"}
    ],
    otherState: "other value",
    showPersons: false
  }

  changedNameHandler = (event) => {
    this.setState({
      persons: [
        {name:"Juan", age:"25"},
        {name: event.target.value, age:"18"},
        {name:"Rogelio", age:"63"}
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow}); //change the current state
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons; --> try to not use this. We are manipulating the original array and is insecure.
    //const persons = this.state.persons.slice(); --> with this, we create a copy to modify safely
    const persons = [...this.state.persons]; //this the same as slice() but using spread operator, a modern ES6 feature
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null; //JSX code block

    if(this.state.showPersons === true) { //charge persons variable
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>This is a React App</h1>
        <button 
        style = {style}
        onClick={() => this.togglePersonsHandler()}>
        Toggle Persons
        </button> 
        {persons}
      </div>
    );
  }
}

export default App;
