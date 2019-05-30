//Then also, we can create a High Order Component and add classes to it
import React from 'react';

const withClass = (props) => (
    <div className={props.classes}>{props.children}</div>
)

export default withClass;