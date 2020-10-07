import * as ActionTypes from './../redux/actionTypes';

export const sendMessageActionCreator = () => ({ type: ActionTypes.SEND_MESSAGE });
export const changeNewMessageTextActionCreator = (messageText) => ({
    type: ActionTypes.CHANGE_NEW_MESSAGE_TEXT,
    messageText
});

export const addPostActionCreator = () => ({ type: ActionTypes.ADD_POST });
export const changeNewPostTextActionCreator = (text) => ({
    type: ActionTypes.CHANGE_NEW_POST_TEXT,
    text
});

export const followActionCreator = (userId) => ({
    type: ActionTypes.FOLLOW,
    userId
});
export const unfollowActionCreator = (userId) => ({
    type: ActionTypes.UNFOLLOW,
    userId
});
export const setUsersActionCreator = (users) => ({
    type: ActionTypes.SET_USERS,
    users
});
export const setCurrentPageActionCreator = (currentPage) => ({
    type: ActionTypes.SET_CURRENT_PAGE,
    currentPage
});
export const setTotalUsersCountActionCreator = (totalCount) => ({
    type: ActionTypes.SET_TOTAL_USERS_COUNT,
    totalCount
});
export const setIsLoadingActionCreator = (isLoading) => ({
    type: ActionTypes.SET_IS_LOADING,
    isLoading
});