import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatBox from './ChatBox';
import { addChatBox, closeChatBox } from './reducer/actions';
import './chat.css'

const ChatApp = () => {
  const chatBoxes = useSelector(state => state.chatBoxes);
  const dispatch = useDispatch();


  const handleAddChatBox = () => {
    dispatch(addChatBox());
  };

  const handleCloseChatBox = (index) => {
    dispatch(closeChatBox(index));
  };

  return (
    <div className="chat-app">
      <div className="chat-boxes">
        {chatBoxes.map((_, index) => (
          <div key={index} className="chat-box-wrapper">
            <button
              className="close-button"
              onClick={() => handleCloseChatBox(index)}
            >
              X
            </button>
            <ChatBox index={index} />
          </div>
        ))}
      </div>
      <button onClick={handleAddChatBox}>Add Chat Box</button>
    </div>
  );
};

export default ChatApp;
