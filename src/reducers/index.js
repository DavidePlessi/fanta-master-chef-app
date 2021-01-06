import {combineReducers} from 'redux';
import {connectRouter} from "connected-react-router";


import message from "./message";
import auth from "./auth";

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth,
    message
  });
