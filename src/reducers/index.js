import {combineReducers} from 'redux';
import {connectRouter} from "connected-react-router";


import message from "./message";
import auth from "./auth";
import episode from "./episode";
import participant from "./participant";
import fantaBrigade from "./fantaBrigade";
import deployment from "./deployment";

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth,
    message,
    episode,
    participant,
    fantaBrigade,
    deployment
  });
