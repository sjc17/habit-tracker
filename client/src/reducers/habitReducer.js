import { FETCH_HABITS } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HABITS:
      return action.payload;
    default:
      return state;
  }
};
