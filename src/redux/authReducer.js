import * as ActionTypes from './actionTypes';
import { setUserAuth } from './actionCreators';
import { authApi } from './../api/api';
import { stopSubmit } from 'redux-form';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_USER_AUTH:
            return { ...state, ...action.data };
        default:
            return state;
    }
}

export const getAuth = () => (dispatch) => {
    return authApi.getAuth().then((data) => {
        if (data.resultCode === 0) {
            const { id, email, login } = data.data;
            dispatch(setUserAuth(id, email, login, true));
        }
    });
}

export const login = (loginData) => (dispatch) => {

    authApi.login(loginData).then((data) => {
        if (data.resultCode === 0) {
            dispatch(getAuth());
        } else {
            const err = data.messages.length !== 0 ? data.messages[0] : 'some error';
            dispatch(stopSubmit('login', { _error: err }))
        }
    });
}

export const logout = () => (dispatch) => {
    authApi.logout().then((data) => {
        if (data.resultCode === 0) {
            dispatch(setUserAuth(null, null, null, false))
        }
    });
}

export default authReducer;