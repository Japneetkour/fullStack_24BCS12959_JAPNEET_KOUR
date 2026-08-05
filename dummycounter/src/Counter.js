import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const add = () => setCount(count + 1);
  const remove = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="box">
      <h2>Counter with useState</h2>
      <h1>{count}</h1>
      <button onClick={add}>Add</button>
      <button onClick={remove}>Remove</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
