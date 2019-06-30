import axios from 'axios';
import { FETCH_USER, FETCH_HABITS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/currentuser');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchHabits = () => async dispatch => {
  const res = await axios.get('/api/gethabits');
  dispatch({ type: FETCH_HABITS, payload: res.data });
};
