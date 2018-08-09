// console.log(101);
import { createStore } from 'redux';

// // const add = (data) => {
// //   return data.a + data.b;
// // };
// const add = ({ a, b}, c) => {
//   return a + b + c;
// };
// console.log(add({a: 1, b: 12}, 100));

// Action generators
// const incrementCount = (payload = {}) => ({
//   type: 'INCREMENT',
//   incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  // incrementBy: incrementBy
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  // incrementBy: incrementBy
  decrementBy // because the same name
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET',
});

// Reducers
// 1. reducers are pure functions
// 2. never change state or action

const countReducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      };
    default: 
      return state;
  }
}; 
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});
// console.log(store.getState());

// isto e que faz incrementar
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));
//unsubscribe();

// store.dispatch({
//   type: 'INCREMENT'
// });

store.dispatch(incrementCount());

// store.dispatch({
//   type: 'RESET'
// });
store.dispatch(resetCount());
store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

// store.dispatch({
//   type: 'DECREMENT',
// });

// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 10
// });

// store.dispatch({
//   type: 'SET',
//   count: 101
// });
store.dispatch(setCount({count: 101}));
console.log(store.getState());