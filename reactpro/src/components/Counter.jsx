import { useState } from 'react';

export default function Counter() {
  // want to create a state variable with a default value
  const [count, setCount] = useState(0);
  function IncreaseCount() {
    setCount(count + increaseVal);
  }
  function DecreaseCount() {
    setCount(count - increaseVal);
    if (count < 1) {
      setCount(0);
    }
  }
  const [increaseVal, setIncreaseBy] = useState(1);
  function increaseBy() {
    setIncreaseBy(increaseVal + 1);
  }
  function decreaseBy() {
    setIncreaseBy(increaseVal - 1);
  }
  return (
    <div>
      <h1>The count Value is : {count}</h1>
      <button type="button" onClick={IncreaseCount}>
        <h1>+</h1>
      </button>
      <br />
      <button type="button" onClick={DecreaseCount}>
        <h1>-</h1>
      </button>
      {/* here we want to set the value at the increament and decreament is made */}
      <h1>Increase Value by: </h1>
      <button type="button" onClick={increaseBy}>
        IncreaseBy {increaseVal}
      </button>
      <button type="button" onClick={decreaseBy}>
        DecreaseBy {increaseVal}
      </button>
    </div>
  );
}
