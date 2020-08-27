import React from 'react';

interface HelloProps {
    compiler: string;
    framework: string;
}

// you don't need to include the JSX.Element, that's implied
// components have to return a JSX.Element or null
const Hello: React.FC<HelloProps> = (props): JSX.Element => {
    return (
        <h1>Hello from {props.compiler} and {props.framework}!</h1>
    )
}

export default Hello;