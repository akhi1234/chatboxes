// actions.js
export const addChatBox = () => {
    return {
      type: 'ADD_CHAT_BOX'
    };
  };
  
  export const closeChatBox = (index) => {
    return {
      type: 'CLOSE_CHAT_BOX',
      payload: index
    };
  };
  
  export const sendMessage = (index, message) => {
    return {
      type: 'SEND_MESSAGE',
      payload: { index, message }
    };
  };
  