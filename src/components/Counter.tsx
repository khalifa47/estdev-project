import { useState } from "react";
import { useUser } from "./hooks";

const Counter = ({ initialCount }: CounterProps) => {
  const [count, setCount] = useState<number>(initialCount);
  const { user, setUser } = useUser();

  const delayedCount = () => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 2000);
  };

  const ops = [100, 5, 1, -1, -5, -100];
  return (
    <div style={{ display: "flex", gap: 30, alignItems: "center" }}>
      <div>
        <h1>User Information from Context API</h1>
        {user ? (
          <>
            <p>
              My name is <span style={{ fontWeight: "bold" }}>{user.name}</span>
            </p>
            <p>
              You can contact me on <a href={`mailto:${user.email}`}>E-mail</a>
            </p>
            <button onClick={() => setUser(null)}>Logout</button>
          </>
        ) : (
          <button
            onClick={() =>
              setUser({ name: "Khalifa Fumo", email: "khalifa@gmail.com" })
            }
          >
            Click me to find me
          </button>
        )}
      </div>
      <div style={{ border: "2px solid black", height: "200px" }} />
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
    </div>
  );
};

export default Counter;
