import axios from "axios";
import {API_BASE_URL} from "./config";

export class DeploymentApi {
  constructor() {
    this.apiUrl = API_BASE_URL + "deployments";
    this.createOrUpdateDeployment = async (editionNumber, episodeNumber, participants) => {
      return (await axios.post(
        this.apiUrl,
        {editionNumber, episodeNumber, participants}
        )).data;
    };
    this.getMyDeployments = async () => {
      return (await axios.get(this.apiUrl + '/my-deployment')).data;
    };
    this.getEpisodeDeployment = async (episodeNumber, editionNumber) => {
      return (await axios.get(this.apiUrl + '/' + editionNumber + '/' + episodeNumber)).data;
    }
  }
}