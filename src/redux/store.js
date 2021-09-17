import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
// import productReducer from "./contact/reducer";
import contactReducer from "./contact/reducer"

const rootReducer = combineReducers({contact: contactReducer });

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store