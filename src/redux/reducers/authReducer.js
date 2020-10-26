import { authApi } from './../../api/api';
import { stopSubmit } from 'redux-form';

// Initial State
const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

// Action Types
const SET_USER_AUTH = 'social-network/auth/SET_USER_AUTH';

// Reducer
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH:
            return { ...state, ...action.data };
        default:
            return state;
    }
}

// Action Creators
export const setUserAuth = (userId, email, login, isAuth) => ({
    type: SET_USER_AUTH,
    data: { userId, email, login, isAuth }
});

//Thunk Creators
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