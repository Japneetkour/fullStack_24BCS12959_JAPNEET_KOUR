
import { useState } from 'react';

function ColorChanger() {
  const [bgColor, setBgColor] = useState('white');

  return (
    <div style={{ backgroundColor: bgColor}}>
      <div>
        <button 
          onClick={() => setBgColor('blue')}
        >
        Blue
        </button>

        <button 
          onClick={() => setBgColor('red')}
        >
        Red
        </button>

        <button 
          onClick={() => setBgColor('green')}
        >
          Green
        </button>
      </div>
    </div>
  );
}

export default ColorChanger;