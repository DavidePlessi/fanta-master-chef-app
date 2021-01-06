import {MESSAGE_CLEAR, MESSAGE_SET} from "../actions/types";

const initialState = {
  message: {
    message: "",
    type: ""
  },
  show: false
}

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case MESSAGE_SET:
      return {
        ...state,
        message: {...payload},
        show: true
      }
    case MESSAGE_CLEAR:
      return {
        ...initialState
      }
    default:
      return state
  }
}