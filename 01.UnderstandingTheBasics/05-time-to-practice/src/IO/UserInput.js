import React from 'react';

const userInput = (props) => {

    const inputStyle = {
        border: "2px solid red"
    } 

    return(
        <input 
        style = {inputStyle}
        type="text" 
        onInput={props.input} 
        value={props.currentName} />
    );
}

export default userInput;