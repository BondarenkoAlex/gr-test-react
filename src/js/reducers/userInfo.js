import {
    USER_EDIT,
    USER_UPDATE_SUCCESS,
} from '../constants';

const initialState = {
    id           : null,
    fullName     : "",
    birthdayYear : null,
    birthdayMonth: null,
    birthdayDay  : null,
    address      : "",
    city         : "",
    phone        : "",
};

export default function userInfo(state = initialState, action) {
    switch (action.type) {
        case USER_EDIT:
            return action.user;
        case USER_UPDATE_SUCCESS:
            return initialState;
        default:
            return state;
    }
}