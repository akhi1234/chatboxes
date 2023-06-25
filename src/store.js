import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import chatAppReducer  from './reducer/reducer'

const store = createStore(
    chatAppReducer ,
    compose(
        applyMiddleware(thunk) 
    )
);


export default store