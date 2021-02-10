import axios from 'axios';
import {API_BASE_URL} from "./config";

export class GameSessionApi {
  constructor() {
    this.apiUrl = API_BASE_URL + 'gameSessions';
    this.getGameSessions = async () => {
      return (await axios.get(this.apiUrl)).data
    }
  }
}