import axios from 'axios';
import {API_BASE_URL} from "./config";

export class ErrorLogApi {
  constructor() {
    this.apiUrl = API_BASE_URL + 'errorLogs';
    this.logError = async (error) => {
      return (await axios.post(
        this.apiUrl,
        {error}
      )).data
    }
  }
}