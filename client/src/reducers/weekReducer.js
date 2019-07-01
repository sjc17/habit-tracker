import { SET_CURRENT_WEEK } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case SET_CURRENT_WEEK:
      return action.payload;
    default:
      return state;
  }
};
