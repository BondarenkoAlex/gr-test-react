import {
    INIT_USER_LIST_REQUEST,
    INIT_USER_LIST_SUCCESS,
} from '../constants';

import {localStorageObject} from '../utils';

export function initUserListActions() {
    return (dispatch, getState) => {
        dispatch(initUserListRequestActGen());
        getLocalStorage()
            .then((userList)=> {
                dispatch(initUserListSuccessActGen(userList));
            });
    }
}

const getLocalStorage = () => {
    return new Promise((resolve)=> {
        let userListPromise = Object.keys(localStorage)
            .map(key=>localStorageObject.getObject(key));
        Promise.all(userListPromise)
            .then(values => resolve(values));
    });
};

const initUserListRequestActGen = () => {
    return {
        type: INIT_USER_LIST_REQUEST
    };
};

const initUserListSuccessActGen = (userList) => {
    return {
        type: INIT_USER_LIST_SUCCESS,
        userList,
    };
};