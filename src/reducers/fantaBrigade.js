import {
  FANTA_BRIGADE_MY_BRIGADE_REQUEST,
  FANTA_BRIGADE_MY_BRIGADE_RESOLVE,
  FANTA_BRIGADE_MY_BRIGADE_REJECT,
  FANTA_BRIGADE_LIST_REQUEST,
  FANTA_BRIGADE_LIST_RESOLVE,
  FANTA_BRIGADE_LIST_REJECT
} from '../actions/types'

const initialState = {
  brigades: [],
  myBrigade: {},
  isLoading: false
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type){
    case FANTA_BRIGADE_LIST_REQUEST:
    case FANTA_BRIGADE_MY_BRIGADE_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case FANTA_BRIGADE_LIST_RESOLVE:
      return {
        ...state,
        brigades: [...payload.brigades],
        isLoading: false
      }
    case FANTA_BRIGADE_MY_BRIGADE_RESOLVE:
      return {
        ...state,
        myBrigade: {...payload.myBrigade},
        isLoading: false
      }
    case FANTA_BRIGADE_MY_BRIGADE_REJECT:
    case FANTA_BRIGADE_LIST_REJECT:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state;
  }
}