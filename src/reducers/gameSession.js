import {
  GAME_SESSION_SET_CURRENT_SESSION,
  GAME_SESSION_GET_LIST_REQUEST,
  GAME_SESSION_GET_LIST_RESOLVE,
  GAME_SESSION_GET_LIST_REJECT
} from "../actions/types";

const initialState = {
  gameSessions: [],
  currentGameSession: {},
  isLoading: false
}

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case GAME_SESSION_SET_CURRENT_SESSION:
      return {
        ...state,
        currentGameSession: {...payload.selectedGameSession}
      }
    case GAME_SESSION_GET_LIST_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GAME_SESSION_GET_LIST_RESOLVE:
      return {
        ...state,
        gameSessions: payload.sessions,
        isLoading: false
      }
    case GAME_SESSION_GET_LIST_REJECT:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state;
  }
}