import {
  EPISODE_LIST_REQUEST,
  EPISODE_LIST_RESOLVE,
  EPISODE_LIST_REJECT,
  EPISODE_GET_EPISODE_WITH_DEPLOYMENTS_REQUEST,
  EPISODE_GET_EPISODE_WITH_DEPLOYMENTS_RESOLVE,
  EPISODE_GET_EPISODE_WITH_DEPLOYMENTS_REJECT,
  EPISODE_SAVE_RESULTS_REQUEST,
  EPISODE_SAVE_RESULTS_REJECT,
  EPISODE_SAVE_RESULTS_RESOLVE, EPISODE_GET_EPISODE_REQUEST, EPISODE_GET_EPISODE_REJECT, EPISODE_GET_EPISODE_RESOLVE
} from "../actions/types";

const initialState = {
  episodes: [],
  currentEpisodeWithDeployments: {},
  currentEpisode: {},
  isLoading: false
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case EPISODE_LIST_REQUEST:
    case EPISODE_GET_EPISODE_WITH_DEPLOYMENTS_REQUEST:
    case EPISODE_SAVE_RESULTS_REQUEST:
    case EPISODE_GET_EPISODE_REQUEST:
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
    case EPISODE_GET_EPISODE_WITH_DEPLOYMENTS_RESOLVE:
      return {
        ...state,
        currentEpisodeWithDeployments: {...payload.currentEpisodeWithDeployments},
        isLoading: false
      }
    case EPISODE_SAVE_RESULTS_RESOLVE:
      return {
        ...state,
        isLoading: false
      }
    case EPISODE_GET_EPISODE_RESOLVE:
      return {
        ...state,
        currentEpisode: {...payload.currentEpisode},
        isLoading: false
      }
    case EPISODE_LIST_REJECT:
    case EPISODE_GET_EPISODE_WITH_DEPLOYMENTS_REJECT:
    case EPISODE_SAVE_RESULTS_REJECT:
    case EPISODE_GET_EPISODE_REJECT:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state;
  }
}