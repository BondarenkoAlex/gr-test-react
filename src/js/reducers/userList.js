import {
    USER_ADD_SUCCESS,
    USER_DELETE_SUCCESS,
    USER_UPDATE_SUCCESS,
    INIT_USER_LIST_SUCCESS,
} from '../constants';

const initialState = [/*{
 fullName: "Иванов Иван Иванович",
 birthdayYear : 1987,
 birthdayMonth: 10,
 birthdayDay  : 23,
 address : "ул. Осенняя дом 4 корпус 1",
 city    : "Москва",
 phone   : "+7-916-483-57-46",
 },{
 fullName: "Петров Петр Петрович",
 birthdayYear : 1982,
 birthdayMonth: 9,
 birthdayDay  : 3,
 address : "ул. Осенняя дом 4 корпус 1",
 city    : "Москва",
 phone   : "+7-916-483-57-46",
 }*/];

export default function userList(state = initialState, action) {
    switch (action.type) {
        case USER_ADD_SUCCESS:
            return [...state, action.user];
        case INIT_USER_LIST_SUCCESS:
            return action.userList;
        case USER_DELETE_SUCCESS:
            return [...state.filter(user=>user.id !== action.id)];
        case USER_UPDATE_SUCCESS:
            return [...state.map((user)=> {
                return (user.id === action.user.id)
                    ? action.user
                    : user;
            })];
        default:
            return state;
    }
}