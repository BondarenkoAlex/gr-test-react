import {
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
} from '../constants';

import {localStorageObject} from '../utils';

export function updateUserActions(user) {
    debugger;
    return (dispatch, getState) => {
        dispatch(userUpdateRequestActGen(user));
        dispatch(localStorageUpdateObject(user));
    }
}

const localStorageUpdateObject = (user) => {
    return (dispatch, getState) => {
        localStorageObject.setObject(user.id, user)
            .then((user)=> {
                dispatch(userUpdateSuccessActGen(user));
            })
            .catch((rej)=> {
                //dispatch(userAddRequestActGen(rej.user));
            });
    }
};

const userUpdateRequestActGen = (user) => {
    return {
        type: USER_UPDATE_REQUEST
    };
};

const userUpdateSuccessActGen = (user) => {
    return {
        type: USER_UPDATE_SUCCESS,
        user,
    };
};