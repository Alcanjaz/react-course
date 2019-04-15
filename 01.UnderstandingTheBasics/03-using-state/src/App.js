import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; //We can import components from other files

//Now, with React Hooks we can use useState() to manipulate the state using functional components

// const app = () => {
//   const [personState, setPersonState] = useState({
//     persons: [
//       {name:"Juan", age:"25"},
//       {name:"María", age:"18"},
//       {name:"Rogelio", age:"78"}
//     ],
//     otherState: "some other value"
//   });

//   const nameSwitchHandler = () => {
//     // console.warn("Was clicked!! :O");
//     //DON'T DO THIS: this.state.persons[0].name = "Alexis"
//     setPersonState({
//       persons: [
//         {name:"Juan Ignacio", age:"25"},
//         {name:"María", age:"18"},
//         {name:"Rogelio", age:"63"}
//       ]
//     });
//   }

//   return (
//     <div className="App">
//       <h1>This is a React App</h1>
//       <button onClick={nameSwitchHandler}>Switch Name</button>
//       <Person age={personState.persons[0].age} name={personState.persons[0].name}/>
//       <Person age={personState.persons[1].age} name={personState.persons[1].name}> My Hobbies: Read. </Person>
//       <Person age={personState.persons[2].age} name={personState.persons[2].name}/>
//     </div>
//   );

// }


//However, we use more often the Class based component
class App extends Component {
  state = {
    persons: [
      {name:"Juan", age:"25"},
      {name:"María", age:"18"},
      {name:"Rogelio", age:"78"}
    ]
  }

  nameSwitchHandler = (newName) => {
    // console.warn("Was clicked!! :O");
    //DON'T DO THIS: this.state.persons[0].name = "Alexis"
    this.setState({
      persons: [
        {name: newName, age:"25"},
        {name:"María", age:"18"},
        {name:"Rogelio", age:"63"}
      ]
    });
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

  render() {
    return (
      <div className="App">
        <h1>This is a React App</h1>
        <button onClick={() => this.nameSwitchHandler('Juan Ignacio!!!')}>Switch Name</button>
        <Person 
          click={this.nameSwitchHandler.bind(this, 'Juan')}
          age={this.state.persons[0].age} 
          name={this.state.persons[0].name}
          changed={this}
          />
        <Person age={this.state.persons[1].age}
         name={this.state.persons[1].name}
         changed={this.changedNameHandler}> My Hobbies: Read.</Person>
        <Person 
        age={this.state.persons[2].age} 
        name={this.state.persons[2].name}
        />
      </div>
    );
  }
}

export default App;
