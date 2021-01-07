import {
  EPISODE_LIST_REQUEST,
  EPISODE_LIST_RESOLVE,
  EPISODE_LIST_REJECT
} from './types'
import {EpisodeApi} from "../api/episode";
import _ from "lodash";

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
    dispatch({
      type: EPISODE_LIST_REJECT,
      payload: {err: e}
    })
  }
}