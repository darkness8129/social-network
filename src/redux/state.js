
let store = {
    _state: {
        dialogsPage: {
            dialogs: [
                { name: 'Sasha', id: 1 },
                { name: 'Katya', id: 2 },
                { name: 'Oleg', id: 3 },
                { name: 'Anya', id: 4 },
                { name: 'Alina', id: 5 },
                { name: 'Lena', id: 6 },
                { name: 'Dima', id: 7 },
            ],
            messages: [
                { messageText: 'Hello', id: 1 },
                { messageText: 'Hi', id: 2 },
                { messageText: 'How are yo', id: 3 },
                { messageText: 'ok', id: 4 },
            ],
            newMessageText: ''

        },
        profilePage: {
            posts: [
                { postText: 'Test post 1', id: 1 },
                { postText: 'Test post 2', id: 2 },
                { postText: 'Test post 3', id: 3 },
            ],
            newPostText: '',
        }
    },
    _callSubscriber() {
        console.log('rerender');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                this._state.profilePage.posts.push({ id: 5, postText: this._state.profilePage.newPostText });
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
                break;
            case CHANGE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.text;
                this._callSubscriber(this._state);
                break;
            case SEND_MESSAGE:
                this._state.dialogsPage.messages.push({ messageText: this._state.dialogsPage.newMessageText, id: 4 })
                this._state.dialogsPage.newMessageText = '';
                this._callSubscriber(this._state);
                break;
            case CHANGE_NEW_MESSAGE_TEXT:
                this._state.dialogsPage.newMessageText = action.messageText;
                this._callSubscriber(this._state);
                break;
        }

    }
}

const ADD_POST = 'ADD_POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE_NEW_MESSAGE_TEXT';

export const addPostActionCreator = () => ({ type: ADD_POST });
export const changeNewPostTextActionCreator = (text) => ({
    type: CHANGE_NEW_POST_TEXT,
    text: text,
});
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const changeNewMessageTextActionCreator = (messageText) => ({ type: CHANGE_NEW_MESSAGE_TEXT, messageText: messageText });
export default store;

window.state = store._state;