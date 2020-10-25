import * as ActionTypes from './../actionTypes';
import { setUserAuth } from './../actionCreators';
import { authApi } from './../../api/api';
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

//should be return 
export const getAuth = () => async (dispatch) => {
    const data = await authApi.getAuth();

    if (data.resultCode === 0) {
        const { id, email, login } = data.data;
        dispatch(setUserAuth(id, email, login, true));
    }
}

export const login = (loginData) => async (dispatch) => {
    const data = await authApi.login(loginData);
    if (data.resultCode === 0) {
        dispatch(getAuth());
    } else {
        const err = data.messages.length !== 0 ? data.messages[0] : 'some error';
        dispatch(stopSubmit('login', { _error: err }))
    }
}

export const logout = () => async (dispatch) => {
    const data = await authApi.logout();

    if (data.resultCode === 0) {
        dispatch(setUserAuth(null, null, null, false))
    }
}

export default authReducer;