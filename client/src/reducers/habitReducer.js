import {
  FETCH_HABITS,
  ADD_TIMESTAMP,
  REMOVE_TIMESTAMP
} from '../actions/types';

const updateTimeStampFunc = (state, { type, payload }) => {
  const index = state.findIndex(habit => {
    return habit._id === payload.id;
  });
  return state.map((item, i) => {
    // If habit is not specified by our index, do not change it
    if (i !== index) {
      return item;
    }
    let newItem = { ...item };

    if (type === ADD_TIMESTAMP) {
      newItem.timeStamps = newItem.timeStamps.concat(payload.timeStamp);
    } else if (type === REMOVE_TIMESTAMP) {
      newItem.timeStamps = newItem.timeStamps.filter(item => {
        return item !== payload.timeStamp;
      });
    }
    return newItem;
  });
};

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TIMESTAMP:
    case REMOVE_TIMESTAMP:
      return updateTimeStampFunc(state, action);
    case FETCH_HABITS:
      return action.payload;
    default:
      return state;
  }
};
