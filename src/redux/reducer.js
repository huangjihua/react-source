export default function reducer(action, state) {
  switch (action.type) {
    case 'user':
      state = Object.assign(state, action);
      delete state.type;
      return state;
    case 'addCount':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'minusCount':
      let count = state.count - 1;
      return {
        ...state,
        count: count >= 0 ? count : 0,
      };
    default:
      return state;
  }
}
