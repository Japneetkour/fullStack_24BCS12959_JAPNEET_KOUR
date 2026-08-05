import { useState } from 'react';
import ColorChanger from './ColorChanger';

function App() {
  const [count, setCount] = useState(0);
  const addButton=()=>{
    console.log("Working");
    setCount((count) => count + 1)
  }
  const removeButton=()=>{
    console.log("Removing");
    setCount((count) => count - 1)
  }
  const colors=['red','green','blue','yellow'];
  const [primary,...remainingColors]=colors;
  console.log(primary);
  console.log(remainingColors);
  return (
    <>
      <h1>Count:{count}</h1>
      <button onClick={addButton}>Add</button>
      <button onClick={removeButton}>Remove</button> 
      <ColorChanger/>
    </>
  )
}

export default App
