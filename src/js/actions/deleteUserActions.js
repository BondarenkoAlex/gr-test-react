import {
    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_DELETE_FAILURE,
} from '../constants';
import shortid from 'shortid';
import {localStorageObject} from '../utils';

export function deleteUserActions(user) {
    debugger;
    return (dispatch, getState) => {
        dispatch(userDeleteRequestActGen(user));
        dispatch(localStorageSetObject(user));
    }
}

const localStorageSetObject = (user) => {
    return (dispatch, getState) => {
        localStorageObject.removeItem(user.id)
            .then((id)=> {
                dispatch(userDeleteSuccessActGen(id));
            })
            .catch((rej)=> {
                //dispatch(userDeleteSuccessActGen(rej.id));
            });
    }
};

const userDeleteRequestActGen = (user) => {
    return {
        type: USER_DELETE_REQUEST,
    };
};

const userDeleteSuccessActGen = (id) => {
    return {
        type: USER_DELETE_SUCCESS,
        id,
    };
};

// const userDeleteFailureActGen = (id) => {
//     return {
//         type: USER_DELETE_FAILURE,
//         id,
//     };
// };