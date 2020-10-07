import * as ActionTypes from './actionTypes';

const initialState = {
    posts: [
        { postText: 'Test post 1', id: 1 },
        { postText: 'Test post 2', id: 2 },
        { postText: 'Test post 3', id: 3 },
    ],
    newPostText: '',
    userProfile: null
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
        default:
            return state;
    }
}

export default profileReducer;