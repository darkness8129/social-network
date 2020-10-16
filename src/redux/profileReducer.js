import * as ActionTypes from './actionTypes';
import { setProfileIsLoading, setUserProfile, setUserStatus } from './actionCreators';
import { userProfileApi } from './../api/api';
const initialState = {
    posts: [
        { postText: 'Test post 1', id: 1 },
        { postText: 'Test post 2', id: 2 },
        { postText: 'Test post 3', id: 3 },
    ],
    newPostText: '',
    userProfile: null,
    isLoading: false,
    userStatus: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: 5, postText: state.newPostText }],
                newPostText: ''
            };
        case ActionTypes.CHANGE_NEW_POST_TEXT:
            return { ...state, newPostText: action.text };
        case ActionTypes.SET_USER_PROFILE:
            return { ...state, userProfile: action.userProfile };
        case ActionTypes.SET_PROFILE_IS_LOADING:
            return { ...state, isLoading: action.isLoading };
        case ActionTypes.SET_USER_STATUS:
            return { ...state, userStatus: action.userStatus };
        default:
            return state;
    }
}

export const getUserProfile = userId => dispatch => {
    dispatch(setProfileIsLoading(true));
    userProfileApi.getUserProfile(userId).then((data) => {
        dispatch(setProfileIsLoading(false));
        dispatch(setUserProfile(data));
    });
}

export const getUserStatus = userId => dispatch => {
    userProfileApi.getStatus(userId).then((data) => {
        dispatch(setUserStatus(data));
    })
}

export const updateUserStatus = (status) => (dispatch) => {
    userProfileApi.updateStatus(status).then((data) => {
        if (data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    })
}

export default profileReducer;