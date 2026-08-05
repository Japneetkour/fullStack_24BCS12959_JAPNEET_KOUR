import './App.css';
import Counter from './Counter';
import CounterReducer from './CounterReducer';

function App() {
  return (
    <div className="app">
      <h1>React Counters</h1>
      <Counter />
      <CounterReducer />
    </div>
  );
}

export default App;
