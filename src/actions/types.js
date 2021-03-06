/* ----- AUTH ----- */
//LOGIN
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_RESOLVE = 'LOGIN_RESOLVE';
export const LOGIN_REJECT = 'LOGIN_REJECT';

//USER LOADING
export const USER_LOADING_REQUEST = 'USER_LOADING_REQUEST';
export const USER_LOADING_RESOLVE = 'USER_LOADING_RESOLVE';
export const USER_LOADING_REJECT = 'USER_LOADING_REJECT';

// LOGOUT
export const LOGOUT = 'LOGOUT';


/* ----- Message ----- */
// Set message
export const MESSAGE_SET = "MESSAGE_SET"
// Clear message
export const MESSAGE_CLEAR = "MESSAGE_CLEAR"

/* ----- Episode ----- */
// Get episode list
export const EPISODE_LIST_REQUEST = "EPISODE_LIST_REQUEST";
export const EPISODE_LIST_RESOLVE = "EPISODE_LIST_RESOLVE";
export const EPISODE_LIST_REJECT = "EPISODE_LIST_REJECT";
// Get episode with deployment
export const EPISODE_GET_EPISODE_WITH_DEPLOYMENTS_REQUEST = "EPISODE_GET_EPISODE_WITH_DEPLOYMENTS_REQUEST";
export const EPISODE_GET_EPISODE_WITH_DEPLOYMENTS_RESOLVE = "EPISODE_GET_EPISODE_WITH_DEPLOYMENTS_RESOLVE";
export const EPISODE_GET_EPISODE_WITH_DEPLOYMENTS_REJECT = "EPISODE_GET_EPISODE_WITH_DEPLOYMENTS_REJECT";
// Get episode with deployment
export const EPISODE_GET_EPISODE_REQUEST = "EPISODE_GET_EPISODE_REQUEST";
export const EPISODE_GET_EPISODE_RESOLVE = "EPISODE_GET_EPISODE_RESOLVE";
export const EPISODE_GET_EPISODE_REJECT = "EPISODE_GET_EPISODE_REJECT";
// Save episode result
export const EPISODE_SAVE_RESULTS_REQUEST = "EPISODE_SAVE_RESULTS_REQUEST";
export const EPISODE_SAVE_RESULTS_RESOLVE = "EPISODE_SAVE_RESULTS_RESOLVE";
export const EPISODE_SAVE_RESULTS_REJECT = "EPISODE_SAVE_RESULTS_REJECT";

/* ----- Participant ----- */
// Get participant
export const PARTICIPANT_LIST_REQUEST = "PARTICIPANT_LIST_REQUEST";
export const PARTICIPANT_LIST_RESOLVE = "PARTICIPANT_LIST_RESOLVE";
export const PARTICIPANT_LIST_REJECT = "PARTICIPANT_LIST_REJECT";

/* ----- FantaBrigade ----- */
// Get my brigade
export const FANTA_BRIGADE_MY_BRIGADE_REQUEST = "FANTA_BRIGADE_MY_BRIGADE_REQUEST";
export const FANTA_BRIGADE_MY_BRIGADE_RESOLVE = "FANTA_BRIGADE_MY_BRIGADE_RESOLVE";
export const FANTA_BRIGADE_MY_BRIGADE_REJECT = "FANTA_BRIGADE_MY_BRIGADE_REJECT";
// Get brigade list
export const FANTA_BRIGADE_LIST_REQUEST = "FANTA_BRIGADE_LIST_REQUEST";
export const FANTA_BRIGADE_LIST_RESOLVE = "FANTA_BRIGADE_LIST_RESOLVE";
export const FANTA_BRIGADE_LIST_REJECT = "FANTA_BRIGADE_LIST_REJECT";

/* ----- Deployments ----- */
// Create or update a deployment
export const DEPLOYMENT_CREATE_OR_UPDATE_REQUEST = "DEPLOYMENT_CREATE_OR_UPDATE_REQUEST";
export const DEPLOYMENT_CREATE_OR_UPDATE_RESOLVE = "DEPLOYMENT_CREATE_OR_UPDATE_RESOLVE";
export const DEPLOYMENT_CREATE_OR_UPDATE_REJECT = "DEPLOYMENT_CREATE_OR_UPDATE_REJECT";
// Get all my deployments
export const DEPLOYMENT_GET_MY_DEPLOYMENT_REQUEST = "DEPLOYMENT_GET_MY_DEPLOYMENT_REQUEST";
export const DEPLOYMENT_GET_MY_DEPLOYMENT_RESOLVE = "DEPLOYMENT_GET_MY_DEPLOYMENT_RESOLVE";
export const DEPLOYMENT_GET_MY_DEPLOYMENT_REJECT = "DEPLOYMENT_GET_MY_DEPLOYMENT_REJECT";
// Get current episode deployment
export const DEPLOYMENT_GET_CURRENT_EPISODE_DEPLOYMENT_REQUEST = "DEPLOYMENT_GET_CURRENT_EPISODE_DEPLOYMENT_REQUEST";
export const DEPLOYMENT_GET_CURRENT_EPISODE_DEPLOYMENT_RESOLVE = "DEPLOYMENT_GET_CURRENT_EPISODE_DEPLOYMENT_RESOLVE";
export const DEPLOYMENT_GET_CURRENT_EPISODE_DEPLOYMENT_REJECT = "DEPLOYMENT_GET_CURRENT_EPISODE_DEPLOYMENT_REJECT";

/* ----- Game session ----- */
// Get all user's game sessions
export const GAME_SESSION_GET_LIST_REQUEST = 'GAME_SESSION_GET_LIST_REQUEST';
export const GAME_SESSION_GET_LIST_RESOLVE = 'GAME_SESSION_GET_LIST_RESOLVE';
export const GAME_SESSION_GET_LIST_REJECT = 'GAME_SESSION_GET_LIST_REJECT';

//Set user current game session
export const GAME_SESSION_SET_CURRENT_SESSION = 'GAME_SESSION_SET_CURRENT_SESSION';
