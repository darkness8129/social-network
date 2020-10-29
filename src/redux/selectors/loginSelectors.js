export const getIsAuth = (state) => {
    return state.authReducer.isAuth;
}

export const getCaptchaUrl = (state) => {
    return state.authReducer.captchaUrl;
}