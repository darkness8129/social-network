import * as ActionTypes from './../redux/actionTypes';

//dialogs
export const sendMessage = (newMessageBody) => ({ type: ActionTypes.SEND_MESSAGE, newMessageBody });

//profile
export const setUserProfile = (userProfile) => ({
    type: ActionTypes.SET_USER_PROFILE,
    userProfile
});

export const addPost = (newPostBody) => ({ type: ActionTypes.ADD_POST, newPostBody });

export const setProfileIsLoading = (isLoading) => ({
    type: ActionTypes.SET_PROFILE_IS_LOADING,
    isLoading
});

export const setUserStatus = (userStatus) => ({
    type: ActionTypes.SET_USER_STATUS,
    userStatus
});

//users
export const followSuccess = (userId) => ({
    type: ActionTypes.FOLLOW,
    userId
});
export const unfollowSuccess = (userId) => ({
    type: ActionTypes.UNFOLLOW,
    userId
});
export const setUsers = (users) => ({
    type: ActionTypes.SET_USERS,
    users
});
export const setCurrentPage = (currentPage) => ({
    type: ActionTypes.SET_CURRENT_PAGE,
    currentPage
});
export const setTotalUsersCount = (totalCount) => ({
    type: ActionTypes.SET_TOTAL_USERS_COUNT,
    totalCount
});
export const setIsLoading = (isLoading) => ({
    type: ActionTypes.SET_IS_LOADING,
    isLoading
});
export const toggleFollowingInProgress = (isLoading, userId) => ({
    type: ActionTypes.TOGGLE_FOLLOWING_IN_PROGRESS,
    isLoading,
    userId
});

//header
export const setUserAuth = (userId, email, login, isAuth) => ({
    type: ActionTypes.SET_USER_AUTH,
    data: { userId, email, login, isAuth }
});

// app
export const initializeSuccess = () => ({
    type: ActionTypes.INITIALIZE_SUCCESS
});