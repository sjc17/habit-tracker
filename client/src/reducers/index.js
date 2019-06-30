import { combineReducers } from 'redux';
import authReducer from './authReducer';
import habitReducer from './habitReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  auth: authReducer,
  habits: habitReducer,
  form: formReducer
});
