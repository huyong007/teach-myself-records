
import React from 'react';
// import ReactDOM from 'react-dom';


function Welcome(props) {
    return <h1>hello,{props.name}</h1>;
}

const element = <Welcome name='Sara' />;

export default element;