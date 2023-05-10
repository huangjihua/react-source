const createStore = (reducer, initState) => {
  let state = initState;
  let subscribers = [];

  // 订阅 定义一个subscriber
  const subscribe = (fn) => {
    subscribers.push(fn);
  };
  // 发布
  const dispatch = (action) => {
    state = reducer(action, state);
    subscribers.forEach((fn) => fn());
  };

  // 获取State
  const getState = () => state;

  return {
    subscribe,
    dispatch,
    getState,
  };
};

export default createStore;
