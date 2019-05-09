import React, { Component } from 'react';
import styles from './App.module.css';
import Cockpit from '../Components/Cockpit/Cockpit'
import Persons from '../Components/Persons/Persons';


/*
The class-based Components have a group of functions named 'Lifecycle Hooks' that  
make this components work. We have a lot but every hook will execute depending of the instance of
the component
*/
class App extends Component {

  //CREATION OF THE COMPONENT
  constructor(props){ //The component's constructor receive props and initialize the state
    super(props); //Inherit the props from Component class that we are extending
    console.log('[App.js] constructor');

  //   /* In the older sintax, the state was declared into the constructor
  //   this.state = {
  //     persons: [
  //       {id: 'askjla1', name:"Juan", age:"25"},
  //       {id: 'assajs1', name:"María", age:"18"},
  //       {id: 'aklajl1', name:"Rogelio", age:"78"}
  //     ],
  //     otherState: "other value",
  //     showPersons: false
  //   }
  //    */
  }

  //Now, in the modern sintax, React automatically declares the constructor and the state for us.
  //And we can declare the state's data and manage props without write the constructor
  state = {
    persons: [
      {id: 'askjla1', name:"Juan", age:"25"},
      {id: 'assajs1', name:"María", age:"18"},
      {id: 'aklajl1', name:"Rogelio", age:"78"}
    ],
    otherState: "other value",
    showPersons: false
  }


  //This will be executed right before the render() method. 
  //This method exists for rare use cases where the state depends on changes in props over time
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state; //Return the updated state
  }

  //This will be executed after first execution of render() method (the component is mounted)
  //If you need to load data from a remote endpoint, this is a good place to instantiate the HTTP request
  componentDidMount(){
    console.log('[App.js] ComponentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
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
    console.log('[App.js] render');

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
