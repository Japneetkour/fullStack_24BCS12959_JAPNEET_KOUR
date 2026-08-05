import React from 'react';
import { useState } from 'react';
function useCounter() {
  const [count, setCount] = useState(0);

  const addElement = () => {
    setCount(count + 1);
  };

  const removeElement = () => {
    setCount(count - 1);
  };

  const resetElement = () => {
    setCount(0);
  };

  return { count, addElement, removeElement, resetElement };
}
export default useCounter;