import * as ActionTypes from './actionTypes';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_USER_AUTH:
            return { ...state, ...action.data, isAuth: true };
        default:
            return state;
    }
}

export default profileReducer;