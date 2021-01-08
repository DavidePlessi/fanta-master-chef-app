import {
  DEPLOYMENT_CREATE_OR_UPDATE_REQUEST,
  DEPLOYMENT_CREATE_OR_UPDATE_RESOLVE,
  DEPLOYMENT_CREATE_OR_UPDATE_REJECT,
  DEPLOYMENT_GET_MY_DEPLOYMENT_REQUEST,
  DEPLOYMENT_GET_MY_DEPLOYMENT_RESOLVE,
  DEPLOYMENT_GET_MY_DEPLOYMENT_REJECT,
  DEPLOYMENT_GET_CURRENT_EPISODE_DEPLOYMENT_REQUEST,
  DEPLOYMENT_GET_CURRENT_EPISODE_DEPLOYMENT_REJECT, DEPLOYMENT_GET_CURRENT_EPISODE_DEPLOYMENT_RESOLVE
} from '../actions/types';
import _ from 'lodash';

const initialState = {
  myDeployments: [],
  currentDeployment: {},
  isLoading: false
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case DEPLOYMENT_CREATE_OR_UPDATE_REQUEST:
    case DEPLOYMENT_GET_MY_DEPLOYMENT_REQUEST:
    case DEPLOYMENT_GET_CURRENT_EPISODE_DEPLOYMENT_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case DEPLOYMENT_CREATE_OR_UPDATE_RESOLVE:
      return {
        ...state,
        isLoading: false,
        myDeployments: updateDeployment(state.myDeployments, payload.newDeployment)
      }
    case DEPLOYMENT_GET_MY_DEPLOYMENT_RESOLVE:
      return {
        ...state,
        myDeployments: payload.myDeployments,
        isLoading: false
      }
    case DEPLOYMENT_GET_CURRENT_EPISODE_DEPLOYMENT_RESOLVE:
      return {
        ...state,
        currentDeployment: {...payload.currentEpisodeDeployment},
        isLoading: false
      }
    case DEPLOYMENT_CREATE_OR_UPDATE_REJECT:
    case DEPLOYMENT_GET_MY_DEPLOYMENT_REJECT:
    case DEPLOYMENT_GET_CURRENT_EPISODE_DEPLOYMENT_REJECT:
      return {
        ...state,
        ...payload,
        isLoading: false
      }
    default:
      return state;
  }
}

function updateDeployment(deployments, newDeployment) {
  const deploymentToUpdateIndex = _.findIndex(
    deployments,
    (x) => x.user === deployments.user && x.episode === deployments.episode
  );
  const newDeploymentList = [...deployments];
  if(deploymentToUpdateIndex === -1) {
    newDeploymentList.push(newDeployment)
  } else {
   newDeploymentList[deploymentToUpdateIndex] = newDeployment;
  }
  return [...newDeploymentList];
}