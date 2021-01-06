import {
  EPISODE_LIST_REQUEST,
  EPISODE_LIST_RESOLVE,
  EPISODE_LIST_REJECT
} from "../actions/types";

const initialState = {
  episodes: [],
  isLoading: false
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case EPISODE_LIST_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case EPISODE_LIST_RESOLVE:
      return {
        ...state,
        episodes: [...payload.episodes],
        isLoading: false
      }
    case EPISODE_LIST_REJECT:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state;
  }
}