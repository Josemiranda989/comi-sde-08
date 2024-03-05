import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Hiciste click {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Incrementar contador</button>
    </>
  );
};
