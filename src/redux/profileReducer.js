const ADD_POST = 'ADD_POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT';

const initialState = {
    posts: [
        { postText: 'Test post 1', id: 1 },
        { postText: 'Test post 2', id: 2 },
        { postText: 'Test post 3', id: 3 },
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.messages, { id: 5, postText: state.newPostText }],
                newPostText: ''
            };
        case CHANGE_NEW_POST_TEXT:
            return { ...state, newPostText: action.text };
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const changeNewPostTextActionCreator = (text) => ({
    type: CHANGE_NEW_POST_TEXT,
    text: text,
});

export default profileReducer;