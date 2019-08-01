// where create redux store
// pass in middleware/devtools to our store
// ass in  reducer functions
// export our store by default so that we can pass it

// imports:
//take in all

//applyMiddle: this is a function that takes in any amount of middleware as argument and then allows your redux app to use them;
//
//createLogger: allows you to see in your browser console the action that was just dispatched, the dispatched, the previous state prior to the action being dispatched, and the next state after the action was dispatched;
// thunkMiddleware: becauss your reducer function ONLY accepts objects, it can't accept Promises or any other data type/data structure -- so thunkMiddleware will hijack and intercept any action that is dispatched to the store and type check if the value is an object(which the thunkMiddleware will permit to go through to the store) or if it is a function
import { combineReducers, applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevtTools } from "redux-devtools-extension";

//rootReducer: this looks like an object where the keys are the names of your reducer functions and the values are the outputs of those reducer functions;
//rootReducer: {nameOfReducerA: valueOfReducerA, nameOfReducerB:valueOfReducerB}
//looger: read the description for createlogger above;
//...

const rootReducer = combineReducers(/*pass in reducers here later*/);
const logger = createLogger({ collapsed: true });
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, logger)
);
const store = createStore(rootReducer, middleware);

export default store;
