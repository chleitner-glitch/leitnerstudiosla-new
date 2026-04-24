"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm your Leitner Studios assistant. How can I help you today? Ask me about availability, pricing, what’s included, parking, etc." }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", content: input }]);
    setInput("");

    // Simple smart replies (we can make it real AI later)
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Thanks for asking! Our studio is $50/hr with a 4-hour minimum. Natural light all day. Would you like me to check availability for a specific date?"
      }]);
    }, 800);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 bg-black text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-gray-800 transition"
      >
        💬
      </motion.button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-28 right-8 w-96 bg-white rounded-3xl shadow-2xl overflow-hidden z-50 border border-gray-100">
          <div className="bg-black text-white p-4 flex justify-between items-center">
            <div>Leitner Studios Assistant</div>
            <button onClick={() => setIsOpen(false)} className="text-white/70">✕</button>
          </div>

          <div className="h-96 p-4 overflow-y-auto space-y-4 bg-studio-bg">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] px-4 py-3 rounded-2xl ${msg.role === "user" ? "bg-black text-white" : "bg-white shadow-sm"}`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask anything..."
              className="flex-1 px-4 py-3 border rounded-full focus:outline-none"
            />
            <button onClick={sendMessage} className="bg-black text-white px-6 rounded-full">Send</button>
          </div>
        </div>
      )}
    </>
  );
}