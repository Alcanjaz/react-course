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
            // alert('Saved data!');
        },1000);
        //in functional components, we can return an anonymous function
        /*this function will execute before the main useEffect function runs, 
        but after the first render cycle*/
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
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