import axios from "axios";
import {API_BASE_URL} from "./config";

export class AuthApi {
  constructor() {
    this.apiUrl = API_BASE_URL + "auth";
    this.doLogin = async (email, password) => {
      return (await axios.post(this.apiUrl, {email, password})).data;
    };
    this.getUserData = async () => {
      return (await axios.get(this.apiUrl)).data;
    }
  }
}