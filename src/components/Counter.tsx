import { useState } from "react";

const Counter = ({ initialCount }: CounterProps) => {
  const [count, setCount] = useState<number>(initialCount);

  const delayedCount = () => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 2000);
  };

  const ops = [100, 5, 1, -1, -5, -100];
  return (
    <div>
      <p>Count: {count}</p>
      {ops.map((op, i) => (
        <button key={i} onClick={() => setCount(count + op)}>
          {op > 0 && "+"}
          {op}
        </button>
      ))}
      <br />
      <button onClick={delayedCount}>D Increment</button>
    </div>
  );
};

export default Counter;
