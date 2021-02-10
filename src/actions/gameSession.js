import {GameSessionApi} from "../api/gameSession";
import {setError} from "./message";
import {
  GAME_SESSION_GET_LIST_REJECT,
  GAME_SESSION_GET_LIST_REQUEST,
  GAME_SESSION_GET_LIST_RESOLVE,
  GAME_SESSION_SET_CURRENT_SESSION
} from "./types";
import setGameSession from "../utils/setGameSessionHeader";
import {history} from "../store";

const gameSessionApi = new GameSessionApi();

export const getMyGameSessions = (setDefaultSession = false) => async dispatch => {
  try {
    dispatch({
      type: GAME_SESSION_GET_LIST_REQUEST,
      payload: {}
    });
    const sessions = await gameSessionApi.getGameSessions();
    dispatch({
      type: GAME_SESSION_GET_LIST_RESOLVE,
      payload: {sessions}
    });

    if(setDefaultSession && sessions.length > 0) {
      const gameSessionFromStorage = sessions.find(x => x._id === localStorage.getItem('gameSessionId'))
      if(gameSessionFromStorage) await setCurrentGameSession(gameSessionFromStorage)(dispatch)
      else await setCurrentGameSession(sessions[0])(dispatch);
    }

  } catch (e) {
    await setError(e)(dispatch);
    dispatch({
      type: GAME_SESSION_GET_LIST_REJECT,
      payload: {}
    });
  }
}

export const setCurrentGameSession = (selectedGameSession, reloadAll = false) => async dispatch => {
  if(!selectedGameSession) {
    return null;
  }
  setGameSession(selectedGameSession._id);
  dispatch({
    type: GAME_SESSION_SET_CURRENT_SESSION,
    payload: {selectedGameSession}
  });
  if(reloadAll)
    history.push("/login")
}