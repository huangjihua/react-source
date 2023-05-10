// import React from 'react'
// import ReactDOM from 'react-dom';
// import Demo from './demo/demo1';
import React,{Component} from './react'
import ReactDOM from './react-dom';
// import ReactDOM from 'react-dom';
import './redux/rudex.test';

function Comp(props) {
  return <h2>hi {props.name}</h2>;
}

// class comp

class Comp2 extends Component {
  render() {
    return (
      <div>
        <h2>hi {this.props.name}</h2>
      </div>
    );
  }
}

// 测试 处理数组
const users = [
  { name: 'hank', age: 30 },
  { name: 'nimo', age: 7 },
];

// vdom 
const jsx  = (
  <div id="demo" style={{color:"red",border:'1px solid blue'}} onClick={() => alert('click')}>
    <span htmlFor="">hi</span>
    <i></i>
    <Comp name="函数组件"></Comp>
    <Comp2 name="类组件"></Comp2>
    <ul>
      {users.map((user) => (
        <li key={user.name}>{user.name}</li>
      ))}
    </ul>
  </div>
);

console.log(jsx);

ReactDOM.render(jsx, document.querySelector('#root'));
