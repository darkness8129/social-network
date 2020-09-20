import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);

    }
}

export default store;
