import * as ActionTypes from './../redux/actionTypes';

export const sendMessage = () => ({ type: ActionTypes.SEND_MESSAGE });
export const changeNewMessageText = (messageText) => ({
    type: ActionTypes.CHANGE_NEW_MESSAGE_TEXT,
    messageText
});

export const setUserProfile = (userProfile) => ({
    type: ActionTypes.SET_USER_PROFILE,
    userProfile
});
export const addPost = () => ({ type: ActionTypes.ADD_POST });
export const changeNewPostText = (text) => ({
    type: ActionTypes.CHANGE_NEW_POST_TEXT,
    text
});

export const follow = (userId) => ({
    type: ActionTypes.FOLLOW,
    userId
});
export const unfollow = (userId) => ({
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