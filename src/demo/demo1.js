import React from 'react'
import ReactDOM from 'react-dom'; 

// function Component
function Comp(props){
  return <h2>hi {props.name}</h2>
}

const jsx  = (
  <div id="demo" style={{color:"red",border:'1px solid blue'}}>
    <span>hi</span>
    <Comp name="函数组件"></Comp>
  </div>
);
console.log(jsx); // 输出看下具体结构
ReactDOM.render(jsx,document.querySelector('#root'))
