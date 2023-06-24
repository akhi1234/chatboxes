const initialState = {
    chatBoxes: [ ],
    filters: {
      status: 'All',
      colors: []
    }
  }
  
  // Use the initialState as a default value
  export default function appReducer(state = initialState, action) {
    switch (action.type) {
      default:
        return state
    }
  }