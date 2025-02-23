import { useState } from 'react';

const LiveChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
    }
  };

  return (
    <div className="live-chat-widget">
      <h2>Live Chat</h2>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === 'user' ? 'user' : 'bot'}>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default LiveChat;