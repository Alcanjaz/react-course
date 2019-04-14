import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (//We must use only one div parent.
      <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p>This is another tag</p>
      </div>
    ); 
    
    //How JSX Works
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hi! I'm a React App"));
  }
    
}

export default App;
