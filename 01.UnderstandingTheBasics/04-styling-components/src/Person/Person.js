import React from 'react';

import './Person.css';

//We have two different ways to create components

//Class based Components
// class Person extends Component{
//     render(){
//         return (
//         <div>
//             <h2>Some JSX to export</h2>
//             <p>Fantastic</p>
//         </div>
//         );
//     }
// }

// export default Person;

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