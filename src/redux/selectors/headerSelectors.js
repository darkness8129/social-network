export const getLogin = (state) => {
    return state.authReducer.login;
}

export const getIsAuth = (state) => {
    return state.authReducer.isAuth;
}