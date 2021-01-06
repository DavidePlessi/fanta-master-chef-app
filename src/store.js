import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import "regenerator-runtime/runtime";
import createRootReducer from "./reducers";


export const history = createBrowserHistory();
const middleware = [thunk, routerMiddleware(history)];
const initialState = {};

const reducer = createRootReducer(history);
const enhancer = composeWithDevTools(applyMiddleware(...middleware));

export const store = createStore(reducer, initialState, enhancer);
