import { useState } from 'react';

const rates = {
  USD: 1,
  INR: 83,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 157,
};

const currencyList = Object.keys(rates);

function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('INR');

  const amountInUsd = amount / rates[from];
  const result = amountInUsd * rates[to];

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="box">
      <h2>Currency Converter</h2>

      <div className="row">
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="row">
        <label>From</label>
        <select value={from} onChange={(e) => setFrom(e.target.value)}>
          {currencyList.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      <div className="row">
        <label>To</label>
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          {currencyList.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      <button onClick={swap}>Swap</button>

      <h3>
        {amount} {from} = {result.toFixed(2)} {to}
      </h3>
    </div>
  );
}

export default CurrencyConverter;
