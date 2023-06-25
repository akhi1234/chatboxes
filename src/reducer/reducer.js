// reducers.js
const initialState = {
  chatBoxes: []
};

const chatAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CHAT_BOX':
      return {
        ...state,
        chatBoxes: [...state.chatBoxes, { messages: [] }]
      };
    case 'CLOSE_CHAT_BOX':
      return {
        ...state,
        chatBoxes: state.chatBoxes.filter((box, index) => index !== action.payload)
      };
    case 'SEND_MESSAGE':
      return {
        ...state,
        chatBoxes: state.chatBoxes.map((box, index) => {
          if (index === action.payload.index) {
            return {
              ...box,
              messages: [...box.messages, { text: action.payload.message, isSelf: true }]
            };
          }
          return box;
        })
      };
    default:
      return state;
  }
};

export default chatAppReducer;
