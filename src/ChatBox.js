import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from './reducer/actions';
import './chatbox.css'

const ChatBox = ({index}) => {
  const messages = useSelector(state => state.chatBoxes[index].messages);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleMessageSend = () => {
    if (inputValue.trim() !== '') {
      dispatch(sendMessage(index, inputValue));
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
        <button onClick={handleMessageSend}  className='send-btn'>Send</button>
      </div>
    </div>
  );

};

export default ChatBox;
