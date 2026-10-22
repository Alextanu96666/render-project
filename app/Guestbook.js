"use client";

import { useEffect, useState } from "react";

export default function Guestbook({ welcome }) {
  const [messages, setMessages] = useState([]);
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  async function load() {
    const res = await fetch("/api/messages");
    if (res.ok) setMessages(await res.json());
    else setError("Could not load messages (is MongoDB connected?)");
  }

  useEffect(() => {
    load();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ author, text }),
    });
    if (!res.ok) {
      setError((await res.json()).error);
      return;
    }
    setText("");
    load();
  }

  return (
    <main>
      <h1 style={{ color: "red" }}>Guestbook</h1>
      <p className="welcome">{welcome}</p>
      <p className="sub">Next.js · MongoDB · Docker · GitHub Actions · Render</p>

      <form onSubmit={handleSubmit}>
        <input placeholder="Your name" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <textarea placeholder="Leave a message" value={text} onChange={(e) => setText(e.target.value)} required />
        <button type="submit">Sign</button>
      </form>

      {error && <p className="error">{error}</p>}

      <ul>
        {messages.map((m) => (
          <li key={m._id}>
            <strong>{m.author}</strong> <span>{new Date(m.createdAt).toLocaleString()}</span>
            <p>{m.text}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
