import {
    USER_EDIT,
} from '../constants';

import {localStorageObject} from '../utils';

export function editUserActions(user) {
    debugger;
    return (dispatch, getState) => {
        dispatch(userEditActGen(user));
    }
}

const userEditActGen = (user) => {
    return {
        type: USER_EDIT,
        user
    };
};