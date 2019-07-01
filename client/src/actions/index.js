import axios from 'axios';
import { FETCH_USER, FETCH_HABITS, SET_CURRENT_WEEK } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/currentuser');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchHabits = () => async dispatch => {
  const res = await axios.get('/api/gethabits');
  dispatch({ type: FETCH_HABITS, payload: res.data });
};

export const setCurrentWeek = date => dispatch => {
  // We don't care about hours/minutes/seconds
  const monthDayYearDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );
  const dayOfWeek = monthDayYearDate.getDay();
  let sundayOfWeek = monthDayYearDate;
  sundayOfWeek.setDate(date.getDate() - dayOfWeek);

  // week is an array of Dates starting from the closest Sunday of the current week
  let week = [];
  for (let i = 0; i < 7; i++) {
    week[i] = new Date(
      sundayOfWeek.getFullYear(),
      sundayOfWeek.getMonth(),
      sundayOfWeek.getDate() + i
    );
  }

  dispatch({ type: SET_CURRENT_WEEK, payload: week });
};
