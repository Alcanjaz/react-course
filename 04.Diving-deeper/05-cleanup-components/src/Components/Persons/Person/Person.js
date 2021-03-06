import React, { Component } from 'react';
import styles from './Person.module.css';


//In order to use lifecycle hooks we must change to class-based component
class Person extends Component {
    
    render(){
        console.log('[Person.js] rendering...');
        return (
            <div className={styles.Person}>
                <p onClick={this.props.click}>Hi! I am {this.props.name} and I'm {this.props.age} years old</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            </div>
        );
    }

}

export default Person;