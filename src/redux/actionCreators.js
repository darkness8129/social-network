import * as ActionTypes from './../redux/actionTypes';

export const sendMessageActionCreator = () => ({ type: ActionTypes.SEND_MESSAGE });
export const changeNewMessageTextActionCreator = (messageText) => ({
    type: ActionTypes.CHANGE_NEW_MESSAGE_TEXT,
    messageText: messageText
});

export const addPostActionCreator = () => ({ type: ActionTypes.ADD_POST });
export const changeNewPostTextActionCreator = (text) => ({
    type: ActionTypes.CHANGE_NEW_POST_TEXT,
    text: text,
});

export const followActionCreator = (userId) => ({
    type: ActionTypes.FOLLOW,
    userId: userId
});
export const unfollowActionCreator = (userId) => ({
    type: ActionTypes.UNFOLLOW,
    userId: userId
});
export const setUsersActionCreator = (users) => ({
    type: ActionTypes.SET_USERS,
    users: users
});