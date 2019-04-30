import React from 'react';

import './Person.css';

//Functional Components <---We should use this more often. It's the best practice
const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>Hi! I am a {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    );
}

export default person;