import React, {Component} from 'react';
import './App.css';
import Validation from './ValidationComponent/Validation';
import Char from './CharComponent/CharComponent';

class App extends Component {
  
  state = {
    input: {
      text: "",
      chars:[]
    }
  }

  changeHandler = (event) => {
    const input = {...this.state.input};
    const inputText = event.target.value;

    input.text = inputText;
    this.setState({input: input});
  }

  deleteCharHandler = (id) => {
    const text = this.state.input.text.split('');
    const charIndex = text.findIndex((c, index) => index === id);

    text.splice(charIndex, 1);
    
    const updatedText = text.join('');
    this.setState({input: {text:updatedText}});
  }

  render (){
  
    const textArray = this.state.input.text.split('');

    let chars = (
        <div>
          {textArray.map((c, index )=> {
            return <Char 
              click={()=> this.deleteCharHandler(index)}
              char={c} 
              key={index}/>
          })}
        </div>
    )
    

    return(
      <div className="App">
        <Validation 
          textLength={this.state.input.text.length}
        />
        <input type="text" onChange={(event) => this.changeHandler(event)} value={this.state.input.text}></input>
        {chars}
      </div>
    );
  }
}

export default App;
