import {
  FETCH_HABITS,
  ADD_TIMESTAMP,
  REMOVE_TIMESTAMP
} from '../actions/types';

export default (state = [], action) => {
  // For ADD_TIMESTAMP and REMOVE_TIMESTAMP actions
  // Find index of specific habit to modify
  const index = state.findIndex(habit => {
    return habit._id === action.payload.id;
  });

  switch (action.type) {
    case ADD_TIMESTAMP:
      return state.map((item, i) => {
        // If habit is not specified by our index, do not change it
        if (i !== index) {
          return item;
        }
        let newItem = { ...item };
        newItem.timeStamps = newItem.timeStamps.concat(
          action.payload.timeStamp
        );
        return newItem;
      });
    case REMOVE_TIMESTAMP:
      return state.map((item, i) => {
        // If habit is not specified by our index, do not change it
        if (i !== index) {
          return item;
        }
        let newItem = { ...item };
        newItem.timeStamps = newItem.timeStamps.filter(item => {
          return item !== action.payload.timeStamp;
        });
        return newItem;
      });

    case FETCH_HABITS:
      return action.payload;
    default:
      return state;
  }
};
