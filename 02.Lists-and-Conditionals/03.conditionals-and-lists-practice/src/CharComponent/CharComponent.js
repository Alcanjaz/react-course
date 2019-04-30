import React from 'react';
import './CharComponent.css';

const char = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center'
    }
    return (
        <div style={style} onClick={props.click}>
            {props.char}
        </div>
    );
}

export default char;
