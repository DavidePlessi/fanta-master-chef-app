import {MESSAGE_CLEAR, MESSAGE_SET} from "./types";
import translateMessage from "../utils/translateMessage";
import {ErrorLogApi} from '../api/errorLog';
import {ENABLE_ERROR_LOG} from "../api/config";

const errorLogApi = new ErrorLogApi();

export const setError = (error) => async dispatch => {
  let err;

  if (error.response && error.response.data && error.response.data.errorCodes)
    err = error.response.data.errorCodes
      .map(x => translateMessage(x))
      .join(', ');
  else if(error.response && error.response.statusText)
    err = error.response.statusText;
  else if(error.message)
    err = error.message
  else err = error.toString();

  if(ENABLE_ERROR_LOG)
    await errorLogApi.logError({
      content: err,
      path: window.location.href
    });

  dispatch({
    type: MESSAGE_SET,
    payload: {
      message: err,
      type: "error"
    }
  })
}

export const setSuccess = (message) => async dispatch => {
  dispatch({
    type: MESSAGE_SET,
    payload: {
      message,
      type: "success"
    }
  })
}

export const clearMessage = (message) => async dispatch => {
  dispatch({
    type: MESSAGE_CLEAR,
    payload: {}
  })
}