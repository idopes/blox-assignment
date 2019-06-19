import axios from 'axios';
import { LOGIN, FETCH_USER, LOGOUT } from './types';
import { header } from '../config/axiosHeader';

export const login = (username, password) => async dispatch => {
  const res = await axios.post(
    'http://localhost:8888/login',
    JSON.stringify({ username, password }),
    header
  );
  dispatch({
    type: LOGIN,
    payload: res.data.data
  });
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};

export const fetchUser = () => async dispatch => {
  const res = await axios.get('http://localhost:8888/user', header);
  dispatch({
    type: FETCH_USER,
    payload: res.data.data
  });
};
