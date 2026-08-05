import React from 'react';
import useCounter from './hook/useCounter';

function App() {
  const {count, addElement, removeElement, resetElement}=useCounter();

  return (
    <>
      <button onClick={addElement}>Add</button>
      <button onClick={removeElement}>Remove</button>
      <button onClick={resetElement}>Reset</button>
      <h1>Count:{count}</h1>
    </>
  )
}

export default App
