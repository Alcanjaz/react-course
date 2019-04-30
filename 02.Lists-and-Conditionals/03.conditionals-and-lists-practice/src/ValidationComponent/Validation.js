import React from 'react';

const validation = (props) => {
    const checkoutText = props.textLength < 5 ? "Text too short" : "Text Long Enough";

    return (
        <div>
            <h1>{props.textLength}</h1>
            <p>{checkoutText}</p>
        </div>
    )
}

export default validation;