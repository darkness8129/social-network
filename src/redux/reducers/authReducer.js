import { authApi, securityApi } from './../../api/api';
import { stopSubmit } from 'redux-form';

// Initial State
const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

// Action Types
const SET_USER_AUTH = 'social-network/auth/SET_USER_AUTH';
const SET_CAPTCHA_URL = 'social-network/auth/SET_CAPTCHA_URL';

// Reducer
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH:
            return { ...state, ...action.data };
        case SET_CAPTCHA_URL:
            return { ...state, captchaUrl: action.captchaUrl };
        default:
            return state;
    }
}

// Action Creators
export const setUserAuth = (userId, email, login, isAuth) => ({
    type: SET_USER_AUTH,
    data: { userId, email, login, isAuth }
});

const setCaptchaUrl = (captchaUrl) => ({
    type: SET_CAPTCHA_URL,
    captchaUrl
});


//Thunk Creators
export const getAuth = () => async (dispatch) => {
    const data = await authApi.getAuth();

    if (data.resultCode === 0) {
        const { id, email, login } = data.data;
        dispatch(setUserAuth(id, email, login, true));
    }
}

// send email, login to the server
export const login = (loginData) => async (dispatch) => {
    const data = await authApi.login(loginData);

    if (data.resultCode === 0) {
        // get email, login, id do not have err with logging
        dispatch(getAuth());
        // if successfully logged 
        dispatch(setCaptchaUrl(null))
    } else {
        // when captcha needed
        if (data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        // need stop submit if have some errors with logging 
        // to send err message in login form 
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

const getCaptchaUrl = () => async (dispatch) => {
    const data = await securityApi.getCaptchaUrl();

    dispatch(setCaptchaUrl(data.url))
}

export default authReducer;