import React from 'react';

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
        <div>
            <p>Hi! I am a {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
        </div>
    );
}

export default person;