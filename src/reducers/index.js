import { combineReducers } from 'redux';
import postReducer from './postReducer';
import usersReducer from './usersReducer';

export default combineReducers({
    // replaceME : () => 10
    posts: postReducer,
    users: usersReducer
});