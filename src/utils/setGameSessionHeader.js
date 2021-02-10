import axios from 'axios';

const setGameSession = gameSessionId => {
  if (gameSessionId) {
    localStorage.setItem('gameSessionId', gameSessionId)
    axios.defaults.headers.common['game-session-id'] = gameSessionId;
  } else {
    localStorage.removeItem('gameSessionId');
    delete axios.defaults.headers.common['game-session-id'];
  }
};

export default setGameSession;
