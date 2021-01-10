import {
  FANTA_BRIGADE_MY_BRIGADE_REQUEST,
  FANTA_BRIGADE_MY_BRIGADE_RESOLVE,
  FANTA_BRIGADE_MY_BRIGADE_REJECT,
  FANTA_BRIGADE_LIST_REQUEST,
  FANTA_BRIGADE_LIST_RESOLVE,
  FANTA_BRIGADE_LIST_REJECT
} from './types'
import {FantaBrigadeApi} from "../api/fantaBrigade";
import {setError} from "./message";
import _ from 'lodash';

const fantaBrigadeApi = new FantaBrigadeApi();

export const getMyBrigade = () => async dispatch => {
  dispatch({
    type: FANTA_BRIGADE_MY_BRIGADE_REQUEST,
    payload: {}
  });

  try {
    const myBrigade = await fantaBrigadeApi.getMyFantaBrigade();

    dispatch({
      type: FANTA_BRIGADE_MY_BRIGADE_RESOLVE,
      payload: {myBrigade}
    })
  } catch (e) {
    await setError(e)(dispatch)
    dispatch({
      type: FANTA_BRIGADE_MY_BRIGADE_REJECT,
      payload: {err: e}
    })
  }
}

export const getFantaBrigades = () => async dispatch => {
  dispatch({
    type: FANTA_BRIGADE_LIST_REQUEST,
    payload: {}
  });

  try {
    let brigades = await fantaBrigadeApi.getFantaBrigades();
    brigades = _.orderBy(brigades, ['resultsPoint', 'name'], ['desc', 'asc']);
    dispatch({
      type: FANTA_BRIGADE_LIST_RESOLVE,
      payload: {brigades}
    })
  } catch (e) {
    await setError(e)(dispatch)
    dispatch({
      type: FANTA_BRIGADE_LIST_REJECT,
      payload: {err: e}
    })
  }
}