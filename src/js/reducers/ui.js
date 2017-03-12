import {
    USER_EDIT,
    USER_UPDATE_SUCCESS,
    USER_ADD_SUCCESS,
} from '../constants';

const initialState = {
    showModal : false,
};

export default function ui(state = initialState, action) {
    switch (action.type) {
        case USER_EDIT:
            return {showModal:true};
        case USER_UPDATE_SUCCESS:
        case USER_ADD_SUCCESS:
            return {showModal:false};
        default:
            return state;
    }
}