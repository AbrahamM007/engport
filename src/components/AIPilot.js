import React, { useState } from 'react';
import { Bot, X, Send } from 'lucide-react';
import './AIPilot.css';
import { useNavigate } from 'react-router-dom'; // Add this import

export default function AIPilot() {
  const [open, setOpen] = useState(false);
  const [log, setLog] = useState([
    { role: 'ai', text: 'Hello! Need a tour, resume, or projects?' }
  ]);
  const [msg, setMsg] = useState('');
  const navigate = useNavigate(); // Add this

  const send = () => {
    if (!msg.trim()) return;
    const next = [...log, { role: 'user', text: msg }];
    
    // Simple command handling
    let response = { role: 'ai', text: 'I\'m not sure how to help with that. Try asking about resume, work, or contact.' };
    
    const lowerMsg = msg.toLowerCase();
    if (lowerMsg.includes('resume')) {
      response.text = 'Opening your resume...';
      // Open resume in new tab
      window.open('/components/AbrahamMora_Resume.pdf', '_blank');
    } else if (lowerMsg.includes('work') || lowerMsg.includes('project')) {
      response.text = 'Navigating to your work page...';
      setTimeout(() => navigate('/work'), 1000);
    } else if (lowerMsg.includes('contact')) {
      response.text = 'Taking you to the contact page...';
      setTimeout(() => navigate('/contact'), 1000);
    } else if (lowerMsg.includes('about')) {
      response.text = 'Going to the about page...';
      setTimeout(() => navigate('/about'), 1000);
    } else if (lowerMsg.includes('home')) {
      response.text = 'Returning to home page...';
      setTimeout(() => navigate('/'), 1000);
    }
    
    setLog([...next, response]);
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