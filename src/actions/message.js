import {MESSAGE_CLEAR, MESSAGE_SET} from "./types";

export const setError = (error) => async dispatch => {
  let err;
  if (error.response && error.response.data && error.response.data.message) {
    if(error.response.data.message.startsWith("Login failed")){
      err = "UIE006"
    } else {
      err = error.response.data.message;
    }
  }
  else if (error.response && error.response.data)
    err = error.response.data.toString();
  else if(error.response && error.response.statusText)
    err = error.response.statusText;
  else err = error.toString();


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