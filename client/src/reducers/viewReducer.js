import { SET_VIEW_HABIT_DETAILS } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case SET_VIEW_HABIT_DETAILS:
      return action.payload || false;
    default:
      return state;
  }
};
