import {
  PARTICIPANT_LIST_REQUEST,
  PARTICIPANT_LIST_RESOLVE,
  PARTICIPANT_LIST_REJECT
} from "../actions/types";

const initialState = {
  participants: [],
  isLoading: false
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case PARTICIPANT_LIST_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case PARTICIPANT_LIST_RESOLVE:
      return {
        ...state,
        participants: [...payload.participants],
        isLoading: false
      }
    case PARTICIPANT_LIST_REJECT:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state;
  }
}