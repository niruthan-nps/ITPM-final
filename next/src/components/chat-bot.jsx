"use client";

import { useState } from "react";

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      if (data.reply) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.reply },
        ]);
      }

      setInput("");
    } catch (err) {
      console.error("Chat error:", err);
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <div className="mt-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">AI Therapist</h2>
        <button
          onClick={clearChat}
          className="text-sm text-red-500 border border-red-300 px-3 py-1 rounded hover:bg-red-100 transition-all"
        >
          Clear Chat
        </button>
      </div>

      <div className="bg-white border rounded-lg p-4 h-[300px] overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 ${
              msg.role === "user" ? "text-right" : "text-left"
            }`}
          >
            <span
              className={`inline-block px-4 py-2 rounded-lg ${
                msg.role === "user"
                  ? "bg-purple-100 text-purple-800"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              {msg.content}
            </span>
          </div>
        ))}
      </div>

      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask me anything..."
          className="flex-1 border border-purple-300 px-4 py-2 rounded-l-md focus:outline-none"
        />
        <button
          onClick={sendMessage}
          className="bg-purple-500 text-white px-6 py-2 rounded-r-md hover:bg-purple-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}
