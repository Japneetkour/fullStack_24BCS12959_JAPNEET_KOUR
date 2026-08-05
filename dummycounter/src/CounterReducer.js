import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  if (action.type === 'add') {
    return { count: state.count + 1 };
  }
  if (action.type === 'remove') {
    return { count: state.count - 1 };
  }
  if (action.type === 'reset') {
    return { count: 0 };
  }
  return state;
}

function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="box">
      <h2>Counter with useReducer</h2>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'add' })}>Add</button>
      <button onClick={() => dispatch({ type: 'remove' })}>Remove</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default CounterReducer;
