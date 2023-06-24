import React, { useState } from 'react';
import './chatbox.css'

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleMessageSend = () => {
    if (inputValue.trim() !== '') {
      const newMessage = {
        text: inputValue,
        isSelf: true // Assuming all messages sent from this chat box are self messages
      };

      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  return (
    <div className="chat-box">
      <div className="message-display">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.isSelf ? 'self' : 'other'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleMessageSend} className='send-btn'>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
