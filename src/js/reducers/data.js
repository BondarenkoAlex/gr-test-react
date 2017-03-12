import { combineReducers } from 'redux';
import userInfo from './userInfo';
import userList from './userList';

export default combineReducers({
    userInfo,
    userList,
})