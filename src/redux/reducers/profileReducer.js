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
    userStatus: ''
};

// Action Types
const SET_USER_PROFILE = 'social-network/profile/SET_USER_PROFILE';
const ADD_POST = 'social-network/profile/ADD_POST';
const SET_PROFILE_IS_LOADING = 'social-network/profile/SET_PROFILE_IS_LOADING';
const SET_USER_STATUS = 'social-network/profile/SET_USER_STATUS';
const UPLOAD_AVATAR_SUCCESS = 'social-network/profile/UPLOAD_AVATAR_SUCCESS'

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
    console.log(data);

    if (data.resultCode === 0) {
        dispatch(uploadAvatarSuccess(data.data.photos));
    }
}

export default profileReducer;