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
    <div className="fixed bottom-4 right-4 bg-white p-4 shadow-lg rounded-md w-64">
      <h2 className="text-lg font-bold mb-2">Live Chat</h2>
      <div className="h-40 overflow-y-auto border p-2 mb-2">
        {messages.map((msg, index) => (
          <div key={index} className={`p-1 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>{msg.text}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-1 w-full"
        placeholder="Type a message..."
      />
      <button onClick={sendMessage} className="bg-green-600 text-white p-1 mt-2 w-full rounded">Send</button>
    </div>
  );
};

export default LiveChat;
