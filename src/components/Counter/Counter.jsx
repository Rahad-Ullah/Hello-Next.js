"use client";

import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  console.log(counter);
  return (
    <div className="p-8 grid gap-4">
      <h1 className="text-3xl text-primary font-bold text-center">Counter: {counter}</h1>
      <div className="flex justify-center items-center gap-4">
        <button
          className="btn btn-error"
          onClick={() => setCounter(counter - 1)}
        >
          Decrease
        </button>
        <button
          className="btn btn-accent"
          onClick={() => setCounter(counter + 1)}
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default Counter;
