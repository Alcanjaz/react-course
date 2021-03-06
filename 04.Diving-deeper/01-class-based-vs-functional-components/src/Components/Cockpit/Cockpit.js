import React from 'react';
import styles from './Cockpit.module.css'


//The functional components can also manage the state with the new versions of react
//However, this is not used too much because older React Apps use Class based Components for that
//We use the 'props' keyword to manage data
const cockpit = (props) => {
    const classes = [];

    let btnClass = '';

    if(props.showPersons) {
        btnClass = styles.Red;
    }

    if(props.persons.length <= 2) {
      classes.push(styles.red);
    }
    
    if(props.persons.length <=1) {
      classes.push(styles.bold);
    }
    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <p className = {classes.join(" ")}>This is working :O</p>
            <button 
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
        </div>
    )
};

export default cockpit;