import { combineReducers } from 'redux';
import bookmark from './Bookmark';
import login from './Login';

const rootReducer = combineReducers({
  bookmark,
  login,
});

export default rootReducer;
