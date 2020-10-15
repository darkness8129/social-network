import * as ActionTypes from './actionTypes';
import { setUserAuth } from './actionCreators';
import usersApi from './../api/api';

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

export const getAuth = () => (dispatch) => {
    usersApi.getAuth().then((data) => {
        const { id, email, login } = data.data;
        dispatch(setUserAuth(id, email, login));
    });
}

export default profileReducer;