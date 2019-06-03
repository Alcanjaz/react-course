import React, { PureComponent } from 'react';

import Person from './Person/Person';

//We must use class-based components to use lifecycle


//If we want to check multiple props of our component in shoulComponentUpdate
//React gives us a very useful tool to optimize this proccess: PureComponent
//This component uses shouldComponentUpdate but checking multiple props without 
// writing a control sentence.
class Persons extends PureComponent {

  // static getDerivedStateFromProps(props, state){
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if(nextProps.persons !== this.props.persons){
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!!'};
  } 

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  /*For operations like cleanup that we need to execute before destroy or unmount
  a component, we have componentWillUnmount in class-based components*/
  componentWillUnmount(){
    console.log('[App.js] componentWillUnmount');
  }


  render(){
    return this.props.persons.map((person, index) => {
      console.log('rendering...');
        return <Person 
          click={() => this.props.clicked(index)}
          name={person.name} 
          age={person.age} 
          key={person.id}
          changed = {(event) => this.props.changed(event, person.id)}
          isAuth={this.props.isAuthenticated}/>
    });
  }
} 

export default Persons;