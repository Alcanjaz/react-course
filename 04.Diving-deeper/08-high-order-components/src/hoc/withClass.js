//Then also, we can create a High Order Component and add classes to it
import React from 'react';

// const withClass = (props) => (
//     <div className={props.classes}>{props.children}</div>
// );

//another way to create a High Order Component is the next one

const WithClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    );
};

export default WithClass;