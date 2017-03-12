import {
    USER_ADD_REQUEST,
    USER_ADD_SUCCESS,
    USER_ADD_FAILURE,
} from '../constants';

import shortid from 'shortid';
import {localStorageObject} from '../utils';

export function addUserActions(user) {
    debugger;
    return (dispatch, getState) => {
        dispatch(userAddRequestActGen(user));
        dispatch(localStorageSetObject(user));
    }
}

const localStorageSetObject = (user) => {
    return (dispatch, getState) => {
        let id = shortid.generate();
        let saveUser = {
            ...user,
            id,
        };
        localStorageObject.setObject(saveUser.id, saveUser)
            .then((user)=> {
                dispatch(userAddSuccessActGen(user));
            })
            .catch((rej)=> {
                //dispatch(userAddRequestActGen(rej.user));
            });
    }
};

const userAddRequestActGen = (user) => {
    return {
        type: USER_ADD_REQUEST
    };
};

const userAddSuccessActGen = (user) => {
    return {
        type: USER_ADD_SUCCESS,
        user,
    };
};

// const userAddFailureActGen = (user) => {
//     return {
//         type: USER_ADD_FAILURE,
//         user: user,
//     };
// };