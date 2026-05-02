"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  const handleClick = async () => {
    const res = await fetch("/api/hello");

    if (!res.ok) {
      const text = await res.text();
      console.error("API error:", res.status, text);
      setMessage(`API error: ${res.status}`);
      return;
    }

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <main style={{ padding: 24 }}>
      <h1>Hello App</h1>

      <button onClick={handleClick}>
        RailsからHello Worldを取得
      </button>

      {message && <p>{message}</p>}
    </main>
  );

}