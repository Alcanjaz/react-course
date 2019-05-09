import React, {useEffect} from 'react';
import styles from './Cockpit.module.css'


//The functional components can also manage the state with the new versions of react
//However, this is not used too much because older React Apps use Class based Components for that
//We use the 'props' keyword to manage data

//If we want to perform side effects with functional components, now in React 16.8 we can!!
//React Hooks allow us to do that with the useEffect Hook.
const Cockpit = (props) => {
    
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        setTimeout(()=> {
            alert('Saved data!');
        },1000);
    //We can pass an array as the second argument to tell React when re-run this hook and prevent innecesary operations
    //If we want only 1 execution at the first render, we should pass an empty array
    /*why? because we are telling to React to read changes in the dependencies that are inside of the array
     but we don't pass any dependency. This prevent to rerun without using dependencies
    */
    }, []); 


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

export default Cockpit;