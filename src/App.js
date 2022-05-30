import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const [warning, setWarning] = useState('Huh... One sheep"S"?...');

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
    setWarning(
      "Wait a minute... You're supposed to count the sheeps the other way!"
    );
  }
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
    setWarning("");
  }

  return (
    <div class="container">
      <div>
        <button onClick={decrementCount}>-</button>
        <span>'{count} sheeps...'</span>
        <button onClick={incrementCount}>+</button>
      </div>
      <div>
        <span>{warning}</span>
      </div>
    </div>
  );
}

export default App;
