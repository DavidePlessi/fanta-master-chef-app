import axios from "axios";
import {API_BASE_URL} from "./config";

export class FantaBrigadeApi {
  constructor() {
    this.apiUrl = API_BASE_URL + "fantaBrigades";
    this.getFantaBrigades = async () => {
      return (await axios.get(this.apiUrl)).data;
    };
    this.getMyFantaBrigade = async () => {
      return (await axios.get(this.apiUrl + '/my-brigade')).data;
    }
  }
}