import {
  EPISODE_LIST_REQUEST,
  EPISODE_LIST_RESOLVE,
  EPISODE_LIST_REJECT,
  EPISODE_GET_EPISODE_WITH_DEPLOYMENTS_REQUEST,
  EPISODE_GET_EPISODE_WITH_DEPLOYMENTS_RESOLVE,
  EPISODE_GET_EPISODE_WITH_DEPLOYMENTS_REJECT,
  EPISODE_SAVE_RESULTS_REQUEST,
  EPISODE_SAVE_RESULTS_RESOLVE,
  EPISODE_SAVE_RESULTS_REJECT,
  EPISODE_GET_EPISODE_REQUEST,
  EPISODE_GET_EPISODE_RESOLVE,
  EPISODE_GET_EPISODE_REJECT
} from './types'
import {EpisodeApi} from "../api/episode";
import _ from "lodash";
import {setError} from "./message";

const episodeApi = new EpisodeApi();

export const getEpisodes = () => async dispatch => {
  dispatch({
    type: EPISODE_LIST_REQUEST,
    payload: {}
  });
  try {
    const episodes = await episodeApi.getEpisodes();

    dispatch({
      type: EPISODE_LIST_RESOLVE,
      payload: {episodes: _.orderBy(episodes, ['number'], ['asc']) }
    });
  } catch (e) {
    await setError(e)(dispatch)
    dispatch({
      type: EPISODE_LIST_REJECT,
      payload: {err: e}
    })
  }
}

export const getEpisode = (editionNumber, episodeNumber) => async dispatch => {
  dispatch({
    type: EPISODE_GET_EPISODE_REQUEST,
    payload: {}
  })
  try {
    const currentEpisode = await episodeApi.getEpisode(episodeNumber, editionNumber);
    dispatch({
      type: EPISODE_GET_EPISODE_RESOLVE,
      payload: {currentEpisode}
    })
  } catch (e) {
    await setError(e)(dispatch)
    dispatch({
      type: EPISODE_GET_EPISODE_REJECT,
      payload: {err: e}
    })
  }
}

export const getEpisodeWithDeployments = (editionNumber, episodeNumber) => async dispatch => {
  dispatch({
    type: EPISODE_GET_EPISODE_WITH_DEPLOYMENTS_REQUEST,
    payload: {}
  })
  try {
    const currentEpisodeWithDeployments = await episodeApi.getEpisodeWithDeployment(episodeNumber, editionNumber);
    dispatch({
      type: EPISODE_GET_EPISODE_WITH_DEPLOYMENTS_RESOLVE,
      payload: {currentEpisodeWithDeployments}
    })
  } catch (e) {
    await setError(e)(dispatch)
    dispatch({
      type: EPISODE_GET_EPISODE_WITH_DEPLOYMENTS_REJECT,
      payload: {err: e}
    })
  }
}

export const saveEpisodeResults = (data) => async dispatch => {
  dispatch({
    type: EPISODE_SAVE_RESULTS_REQUEST,
    payload: {}
  });
  try {
    const episodeSaved = await episodeApi.loadResults(data);
    dispatch({
      type: EPISODE_SAVE_RESULTS_RESOLVE,
      payload: {episodeSaved}
    })
  } catch (e) {
    await setError(e)(dispatch)
    dispatch({
      type: EPISODE_SAVE_RESULTS_REJECT,
      payload: {err: e}
    })
  }
}