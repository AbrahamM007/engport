import React, { useState } from 'react';
import { Bot, X, Send } from 'lucide-react';
import './AIPilot.css';

export default function AIPilot() {
  const [open, setOpen] = useState(false);
  const [log, setLog] = useState([
    { role: 'ai', text: 'Hello! Need a tour, resume, or projects?' }
  ]);
  const [msg, setMsg] = useState('');

  const send = () => {
    if (!msg.trim()) return;
    const next = [...log, { role: 'user', text: msg }];
    // Mock smart replies for now
    const ai = { role: 'ai', text: 'Opening Artifacts and highlighting recent work. Try the command palette next!' };
    setLog([...next, ai]);
    setMsg('');
  };

  return (
    <>
      <button className="pilot-fab interactive" onClick={() => setOpen(true)} aria-label="Open AI Co-Pilot">
        <Bot size={18} />
      </button>

      {open && (
        <div className="pilot-overlay" onClick={() => setOpen(false)} />
      )}

      <div className={`pilot-panel ${open ? 'open' : ''}`} aria-live="polite">
        <div className="pilot-header">
          <div className="pilot-title">AI Co‑Pilot</div>
          <button className="pilot-close interactive" onClick={() => setOpen(false)} aria-label="Close">
            <X size={16} />
          </button>
        </div>
        <div className="pilot-log">
          {log.map((m, i) => (
            <div key={i} className={`pilot-msg ${m.role}`}>{m.text}</div>
          ))}
        </div>
        <div className="pilot-input">
          <input
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Ask for a tour or open a section..."
          />
          <button className="interactive" onClick={send} aria-label="Send">
            <Send size={16} />
          </button>
        </div>
      </div>
    </>
  );
}