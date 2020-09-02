// import React from 'react'
import React from './react'
import ReactDOM from 'react-dom';

function Comp(props){
  return <h2>hi {props.name}</h2>
}

// vdom 
const jsx  = (
  <div id="demo">
    <span>hi</span>
    <Comp name="hank"></Comp>
  </div>
);

console.log(jsx);

ReactDOM.render(jsx,document.querySelector('#root'))