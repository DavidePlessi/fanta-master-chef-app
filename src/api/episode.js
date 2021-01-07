import axios from "axios";
import {API_BASE_URL} from "./config";

export class EpisodeApi {
  constructor() {
    this.apiUrl = API_BASE_URL + "episodes";
    this.getEpisodes = async () => {
      return (await axios.get(this.apiUrl)).data;
    }
  }
}