import React from 'react';
import styles from './Person.module.css';

//Functional Components <---We should use this more often. It's the best practice
const person = (props) => {
    return (
        <div className={styles.Person}>
            <p onClick={props.click}>Hi! I am {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    );
}

export default person;