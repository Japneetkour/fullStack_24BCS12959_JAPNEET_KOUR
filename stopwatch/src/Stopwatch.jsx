import { useState, useEffect } from 'react';

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (running === false) {
      return;
    }

    const timer = setInterval(() => {
      setSeconds((oldSeconds) => oldSeconds + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [running]);

  const minutes = Math.floor(seconds / 60);
  const leftSeconds = seconds % 60;
  const time =
    String(minutes).padStart(2, '0') + ':' + String(leftSeconds).padStart(2, '0');

  const start = () => setRunning(true);
  const pause = () => setRunning(false);
  const reset = () => {
    setRunning(false);
    setSeconds(0);
  };

  return (
    <div className="box">
      <h2>Stopwatch</h2>
      <h1>{time}</h1>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Stopwatch;
