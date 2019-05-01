import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import './App.css';
import Person from './Person/Person';

//However, we use more often the Class based component
class App extends Component {
  state = {
    persons: [
      {id: 'askjla1', name:"Juan", age:"25"},
      {id: 'assajs1', name:"María", age:"18"},
      {id: 'aklajl1', name:"Rogelio", age:"78"}
    ],
    otherState: "other value",
    showPersons: false
  }

  changedNameHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => p.id === id); //returns the index of the person in the list

    const person = {
      ...this.state.persons[personIndex]
    }; //create a copy of the person object to avoid to change the original object

    person.name = event.target.value;

    const persons = [...this.state.persons]; //create a copy of the array to modify safely
    persons[personIndex] = person; //change the person element that we want

    this.setState({persons: persons}); //update the state persons list with the copy that we changed without mutating the state
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow}); //change the current state
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons; --> try to not use this. We are manipulating the original array and it's insecure.
    //const persons = this.state.persons.slice(); --> with this, we create a copy to modify safely
    const persons = [...this.state.persons]; //this the same as slice() but using spread operator, a modern ES6 feature
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      /*by default, we can't use pseudo selectors or media queries in our inline styles 
        for that, we use a react package named Radium that allow us to use this functionalities*/
      ':hover': { 
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    const classes = [];

    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    
    if(this.state.persons.length <=1) {
      classes.push('bold');
    }

    let persons = null; //JSX code block

    if(this.state.showPersons === true) { //charge persons variable
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} 
              key={person.id}
              changed = {(event) => this.changedNameHandler(event, person.id)}/>
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor : 'salmon',
        color: 'black'
      }
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>This is a React App</h1>
          <p className = {classes.join(" ")}>This is working :O</p>
          <button 
          style = {style}
          onClick={() => this.togglePersonsHandler()}>
          Toggle Persons
          </button> 
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App); //We export an app component but wrapping Radium to inject its functionalities
