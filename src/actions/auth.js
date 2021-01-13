import {AuthApi} from '../api/auth'
import {history} from '../store'
import {
  LOGIN_REJECT,
  LOGIN_REQUEST,
  LOGIN_RESOLVE,
  LOGOUT, USER_LOADING_REJECT, USER_LOADING_REQUEST, USER_LOADING_RESOLVE,
} from "./types";
import {setError} from "./message";
import setAuthToken from "../utils/setAuthToken";

const authApi = new AuthApi();

export const doLogin = (
  email,
  password
) => async dispatch => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
      payload: {}
    });
    email = email.trim()

    const token = (await authApi.doLogin(email, password)).token;

    localStorage.setItem('token', token);
    setAuthToken(token);

    const user = await authApi.getUserData();

    dispatch({
      type: LOGIN_RESOLVE,
      payload: {
        token: token,
        user: user
      }
    });
  } catch (e) {
    localStorage.removeItem("token");
    await setError(e)(dispatch)
    dispatch({
      type: LOGIN_REJECT,
      payload: {err: e}
    })
  }
}


export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  } else {
    return;
  }

  try {
    dispatch({
      type: USER_LOADING_REQUEST,
      payload: {}
    });

    const user = await authApi.getUserData();

    dispatch({
      type: USER_LOADING_RESOLVE,
      payload: {
        token: localStorage.token,
        user: user
      }
    });

  } catch (e) {
    localStorage.removeItem("token");
    await setError(e)(dispatch)
    dispatch({
      type: USER_LOADING_REJECT,
      payload: {err: e}
    })
  }
};

export const doLogout = () => async dispatch => {
  localStorage.removeItem("token")
  dispatch({
    type: LOGOUT,
    payload: {}
  })
  history.push("/")
}