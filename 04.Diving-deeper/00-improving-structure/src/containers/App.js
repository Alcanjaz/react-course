import React, { Component } from 'react';
import styles from './App.module.css';
import Cockpit from '../Components/Cockpit/Cockpit'
import Persons from '../Components/Persons/Persons';

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
    let persons = null; //JSX code block

    if(this.state.showPersons === true) { //charge persons variable
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.changedNameHandler} />;
    }

    return (
      <div className={styles.App}>
      <Cockpit 
        persons = {this.state.persons}
        clicked = {this.togglePersonsHandler}
        showPersons = {this.state.showPersons}/>
        {persons}
      </div>
    );
  }
}

export default App; //We export an app component but wrapping Radium to inject its functionalities
