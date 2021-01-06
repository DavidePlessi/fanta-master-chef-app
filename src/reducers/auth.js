import {
  LOGIN_REJECT,
  LOGIN_REQUEST,
  LOGIN_RESOLVE, LOGOUT,
  USER_LOADING_REJECT,
  USER_LOADING_REQUEST,
  USER_LOADING_RESOLVE
} from "../actions/types";

const initialState = {
  user: {},
  token: "",
  isLoading: false
}

export default function (state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case USER_LOADING_REQUEST:
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case USER_LOADING_RESOLVE:
    case LOGIN_RESOLVE:
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        isLoading: false
      }
    case USER_LOADING_REJECT:
    case LOGIN_REJECT:
      return {
        ...state,
        isLoading: false,
        user: {},
        token: "",
        ...payload
      }
    case LOGOUT:
      return {
        ...initialState
      }
    default:
      return state;
  }
}