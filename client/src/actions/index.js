import axios from 'axios';
import {
  FETCH_USER,
  FETCH_HABITS,
  SET_CURRENT_WEEK,
  CHANGE_CURRENT_WEEK,
  ADD_TIMESTAMP,
  REMOVE_TIMESTAMP
} from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/currentuser');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchHabits = () => async dispatch => {
  const res = await axios.get('/api/gethabits');
  dispatch({ type: FETCH_HABITS, payload: res.data });
};

export const setCurrentWeek = date => dispatch => {
  const dayOfWeek = date.getDay();
  let sundayOfWeek = date;
  sundayOfWeek.setDate(date.getDate() - dayOfWeek);

  // week is an array of Dates starting from the closest Sunday of the current week
  let week = [];
  for (let i = 0; i < 7; i++) {
    week[i] = new Date(
      sundayOfWeek.getFullYear(),
      sundayOfWeek.getMonth(),
      sundayOfWeek.getDate() + i
    ).toDateString();
  }

  dispatch({ type: SET_CURRENT_WEEK, payload: week });
};

export const changeCurrentWeek = (goBackwards, week) => dispatch => {
  let newWeek = [];
  if (typeof goBackwards === 'boolean') {
    let date;
    for (let i = 0; i < 7; i++) {
      date = new Date(week[i]);
      date.setDate(date.getDate() + (goBackwards ? -7 : 7));
      newWeek[i] = date.toDateString();
    }
  } else {
    console.log('not boolean');
    newWeek = week;
  }
  dispatch({ type: CHANGE_CURRENT_WEEK, payload: newWeek });
};

export const updateTimestamp = (habit, timeStamp) => dispatch => {
  const timeStampExists = habit.timeStamps.includes(timeStamp);
  let actionType;
  if (timeStampExists) {
    actionType = REMOVE_TIMESTAMP;
  } else {
    actionType = ADD_TIMESTAMP;
  }

  dispatch({
    type: actionType,
    payload: {
      id: habit._id,
      timeStamp
    }
  });
};
