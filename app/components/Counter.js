"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white p-4 rounded shadow mt-4 text-center">
      <h2 className="text-lg font-semibold">Client Counter</h2>

      <p className="text-2xl my-2">{count}</p>

      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Increase
      </button>
    </div>
  );
}