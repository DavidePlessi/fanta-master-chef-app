import axios from "axios";
import {API_BASE_URL} from "./config";

export class ParticipantApi {
  constructor() {
    this.apiUrl = API_BASE_URL + "participants";
    this.getParticipant = async () => {
      return (await axios.get(this.apiUrl)).data;
    }
  }
}