import React, { Component } from 'react';
import styles from './App.module.css';
import Cockpit from '../Components/Cockpit/Cockpit'
import Persons from '../Components/Persons/Persons';

//The class based components are usually used to manipulate the state
//This components use the keyword 'this' to access to props and state
//Use it if you don't want to use Hooks or you need to manage the State
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

    const personIndex = this.state.persons.findIndex(p => p.id === id); 
    const person = {
      ...this.state.persons[personIndex]
    }; 

    person.name = event.target.value;

    const persons = [...this.state.persons]; 
    persons[personIndex] = person; 
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow}); 
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]; 
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    let persons = null; 

    if(this.state.showPersons === true) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.changedNameHandler} />;
    }

    return (
      <div className={styles.App}>
      <Cockpit 
        title = {this.props.title} //We can assign props to class based components too
        persons = {this.state.persons}
        clicked = {this.togglePersonsHandler}
        showPersons = {this.state.showPersons}/>
        {persons}
      </div>
    );
  }
}

export default App;
