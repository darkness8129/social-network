import { stopSubmit } from 'redux-form';
import { userProfileApi } from '../../api/api';

// Initial State
const initialState = {
    posts: [
        { postText: 'Test post 1', id: 1 },
        { postText: 'Test post 2', id: 2 },
        { postText: 'Test post 3', id: 3 },
    ],
    userProfile: null,
    isLoading: false,
    userStatus: '',
    profileUpdateSuccess: false
};

// Action Types
const SET_USER_PROFILE = 'social-network/profile/SET_USER_PROFILE';
const ADD_POST = 'social-network/profile/ADD_POST';
const SET_PROFILE_IS_LOADING = 'social-network/profile/SET_PROFILE_IS_LOADING';
const SET_USER_STATUS = 'social-network/profile/SET_USER_STATUS';
const UPLOAD_AVATAR_SUCCESS = 'social-network/profile/UPLOAD_AVATAR_SUCCESS'
const SET_PROFILE_UPDATE_SUCCESS = 'social-network/profile/SET_PROFILE_UPDATE_SUCCESS'

// Reducer
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: 5, postText: action.newPostBody }],
            };
        case SET_USER_PROFILE:
            return { ...state, userProfile: action.userProfile };
        case SET_PROFILE_IS_LOADING:
            return { ...state, isLoading: action.isLoading };
        case SET_USER_STATUS:
            return { ...state, userStatus: action.userStatus };
        case UPLOAD_AVATAR_SUCCESS:
            return { ...state, userProfile: { ...state.userProfile, photos: action.photos } };
        case SET_PROFILE_UPDATE_SUCCESS:
            return { ...state, profileUpdateSuccess: action.profileUpdateSuccess };
        default:
            return state;
    }
}

// Action Creators
export const setUserProfile = (userProfile) => ({
    type: SET_USER_PROFILE,
    userProfile
});

export const addPost = (newPostBody) => ({ type: ADD_POST, newPostBody });

export const setProfileIsLoading = (isLoading) => ({
    type: SET_PROFILE_IS_LOADING,
    isLoading
});

export const setUserStatus = (userStatus) => ({
    type: SET_USER_STATUS,
    userStatus
});

const uploadAvatarSuccess = (photos) => ({
    type: UPLOAD_AVATAR_SUCCESS,
    photos
});

const setProfileUpdateSuccess = (profileUpdateSuccess) => ({
    type: SET_PROFILE_UPDATE_SUCCESS,
    profileUpdateSuccess
});

// Thunk Creators
export const requestUserProfile = userId => async (dispatch) => {
    dispatch(setProfileIsLoading(true));

    const data = await userProfileApi.getUserProfile(userId);

    dispatch(setProfileIsLoading(false));
    dispatch(setUserProfile(data));
}

export const requestUserStatus = userId => async (dispatch) => {
    const data = await userProfileApi.getStatus(userId);

    dispatch(setUserStatus(data));
}

export const updateUserStatus = (status) => async (dispatch) => {
    const data = await userProfileApi.updateStatus(status);

    if (data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}

export const uploadAvatar = (photo) => async (dispatch) => {
    const data = await userProfileApi.uploadAvatar(photo);

    if (data.resultCode === 0) {
        dispatch(uploadAvatarSuccess(data.data.photos));
    }
}

export const updateUserProfile = (updatedInfo) => async (dispatch, getState) => {
    const data = await userProfileApi.updateUserProfile(updatedInfo);

    if (data.resultCode === 0) {
        const userId = getState().authReducer.userId;
        dispatch(setProfileUpdateSuccess(true));
        dispatch(requestUserProfile(userId));
    }
    else {
        const err = data.messages.length !== 0 ? data.messages[0] : 'some error';
        const field = err.substring(err.lastIndexOf('>') + 1, err.lastIndexOf(')')).toLowerCase();

        console.log(field);

        dispatch(setProfileUpdateSuccess(false));
        dispatch(stopSubmit('editProfileForm', { 'contacts': { [field]: err } }))
    }
}

export default profileReducer;