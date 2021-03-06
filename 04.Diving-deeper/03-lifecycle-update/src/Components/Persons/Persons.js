import React, { Component } from 'react';

import Person from './Person/Person';

//We must use class-based components to use lifecycle

class Persons extends Component {

  // static getDerivedStateFromProps(props, state){
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shouldComponentUpdate');
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!!'};
  } 

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }


  render(){
    return this.props.persons.map((person, index) => {
      console.log('rendering...');
        return <Person 
          click={() => this.props.clicked(index)}
          name={person.name} 
          age={person.age} 
          key={person.id}
          changed = {(event) => this.props.changed(event, person.id)}/>
    });
  }
} 

export default Persons;