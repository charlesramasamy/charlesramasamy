import { createStore, combineReducers, applyMiddleware, compose } from "redux";


import {getdatareducer,Useractionreducer } from "./reducer";


import thunk from "redux-thunk";

const initialstate = {};
export const reducer = combineReducers({
  
   Useraction:Useractionreducer,
  getdata:getdatareducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducer,
 
  initialstate,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
