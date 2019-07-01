import { combineReducers } from 'redux';
import authReducer from './authReducer';
import habitReducer from './habitReducer';
import weekReducer from './weekReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  auth: authReducer,
  habits: habitReducer,
  week: weekReducer,
  form: formReducer
});
