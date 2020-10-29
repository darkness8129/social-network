export const getUserProfile = (state) => {
    return state.profilePage.userProfile;
}

export const getIsLoading = (state) => {
    return state.profilePage.isLoading;
}

export const getUserStatus = (state) => {
    return state.profilePage.userStatus;
}

export const getAuthorizedUserId = (state) => {
    return state.authReducer.userId;
}

export const getIsAuth = (state) => {
    return state.authReducer.isAuth;
}

export const getProfileUpdateSuccess = (state) => {
    return state.profilePage.profileUpdateSuccess;
}