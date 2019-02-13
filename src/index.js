import React from 'react'; 
import ReactDOM from 'react-dom'; 
import Counter from './counter';
import App from './App.js';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Mari" />;

ReactDOM.render(<App name="Passing Props..." />, document.getElementById('root'));