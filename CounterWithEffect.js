import React, { useState, useEffect } from 'react';

function CounterWithEffect() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(count * 2);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <h3>Calculation: {calculation}</h3>
    </div>
  );
}

export default CounterWithEffect;
