import React from '../react';
import creatStore from './redux';
import reducer from './reducer';
//  测试 createStore使用

let initState = {
  user: {
    name: 'hank',
    age: 32,
  },
  count: 1,
};

let store = creatStore(reducer, initState);

// 启动订阅功能
store.subscribe(() => {
  let state = store.getState();
  console.log(state);
});
store.dispatch({ type: 'user' });

store.dispatch({ type: 'user', user: { name: 'nimo', age: 8 } });
