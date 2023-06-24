import React, { useState } from 'react';
import ChatBox from './ChatBox';
import './chat.css'

const ChatApp = () => {
  const [chatBoxes, setChatBoxes] = useState([]);

  const handleAddChatBox = () => {
    const newChatBox = <ChatBox key={chatBoxes.length} />;
    setChatBoxes([...chatBoxes, newChatBox]);
  };

  const handleCloseChatBox = (index) => {
    const updatedChatBoxes = [...chatBoxes];
    updatedChatBoxes.splice(index, 1);
    setChatBoxes(updatedChatBoxes);
  };

  return (
    <div className="chat-app">
      <div className="chat-boxes">
        {chatBoxes.map((chatBox, index) => (
          <div className="chat-box-wrapper" key={index}>
            {chatBox}
            <button onClick={() => handleCloseChatBox(index)}>Close</button>
          </div>
        ))}
      </div>
      <button onClick={handleAddChatBox}>Add Chat Box</button>
    </div>
  );
};

export default ChatApp;
