import {
  DEPLOYMENT_CREATE_OR_UPDATE_REQUEST,
  DEPLOYMENT_CREATE_OR_UPDATE_RESOLVE,
  DEPLOYMENT_CREATE_OR_UPDATE_REJECT,
  DEPLOYMENT_GET_MY_DEPLOYMENT_REQUEST,
  DEPLOYMENT_GET_MY_DEPLOYMENT_RESOLVE,
  DEPLOYMENT_GET_MY_DEPLOYMENT_REJECT,
  DEPLOYMENT_GET_CURRENT_EPISODE_DEPLOYMENT_REQUEST,
  DEPLOYMENT_GET_CURRENT_EPISODE_DEPLOYMENT_RESOLVE,
  DEPLOYMENT_GET_CURRENT_EPISODE_DEPLOYMENT_REJECT
} from './types'
import {DeploymentApi} from "../api/deployment";
import {setError} from "./message";

const deploymentApi = new DeploymentApi();

export const getMyDeployments = () => async dispatch => {
  dispatch({
    type: DEPLOYMENT_GET_MY_DEPLOYMENT_REQUEST,
    payload: {}
  })
  try {
    const myDeployments = await deploymentApi.getMyDeployments();
    dispatch({
      type: DEPLOYMENT_GET_MY_DEPLOYMENT_RESOLVE,
      payload: {myDeployments}
    })
  } catch (e) {
    await setError(e)(dispatch)
    dispatch({
      type: DEPLOYMENT_GET_MY_DEPLOYMENT_REJECT,
      payload: {err: e}
    })
  }
}

export const getEpisodeDeployment = (episodeNumber) => async dispatch => {
  dispatch({
    type: DEPLOYMENT_GET_CURRENT_EPISODE_DEPLOYMENT_REQUEST,
    payload: {}
  })
  try {
    const currentEpisodeDeployment = await deploymentApi.getEpisodeDeployment(episodeNumber, 10);
    dispatch({
      type: DEPLOYMENT_GET_CURRENT_EPISODE_DEPLOYMENT_RESOLVE,
      payload: {currentEpisodeDeployment}
    })
  } catch (e) {
    await setError(e)(dispatch)
    dispatch({
      type: DEPLOYMENT_GET_CURRENT_EPISODE_DEPLOYMENT_REJECT,
      payload: {err: e}
    })
  }
}

export const createOrUpdateDeploymentPair = (episodeNumbers, participants, callback) => async dispatch => {
  try {
    for(let episodeNumber of episodeNumbers){
      await createOrUpdateDeployment(episodeNumber, participants, null)(dispatch);
    }
    if(callback){
      debugger;
      callback();
    }
  } catch (e) {
    await setError(e)(dispatch)
  }
}

export const createOrUpdateDeployment = (episodeNumber, participants, callback) => async dispatch => {
  dispatch({
    type: DEPLOYMENT_CREATE_OR_UPDATE_REQUEST,
    payload: {}
  });
  try {
    const newDeployment = await deploymentApi
      .createOrUpdateDeployment(10, episodeNumber, participants);
    dispatch({
      type: DEPLOYMENT_CREATE_OR_UPDATE_RESOLVE,
      payload: {newDeployment}
    })
    if(callback){
      callback();
    }
  } catch (e) {
    await setError(e)(dispatch)
    dispatch({
      type: DEPLOYMENT_CREATE_OR_UPDATE_REJECT,
      payload: {err: e}
    })
  }
}