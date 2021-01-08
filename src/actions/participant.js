import {
  PARTICIPANT_LIST_REQUEST,
  PARTICIPANT_LIST_RESOLVE,
  PARTICIPANT_LIST_REJECT
} from './types'
import {ParticipantApi} from "../api/participant";
import _ from "lodash";
import {setError} from "./message";

const participantApi = new ParticipantApi();

export const getParticipants = () => async dispatch => {
  dispatch({
    type: PARTICIPANT_LIST_REQUEST,
    payload: {}
  });
  try {
    const participants = await participantApi.getParticipant();

    dispatch({
      type: PARTICIPANT_LIST_RESOLVE,
      payload: {participants: _.orderBy(
        participants,
          ['eliminated', 'name', 'lastName'], ['asc', 'asc', 'asc']
        )}
    });
  } catch (e) {
    await setError(e)(dispatch)
    dispatch({
      type: PARTICIPANT_LIST_REJECT,
      payload: {err: e}
    })
  }
}