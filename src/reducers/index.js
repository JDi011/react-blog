import { combineReducers } from 'redux';
import postReducer from './postReducer';

export default combineReducers({
    // replaceME : () => 10
    posts: postReducer,
});