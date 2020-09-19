
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
        if (action.type === 'ADD_POST') {
            this._state.profilePage.posts.push({ id: 5, postText: this._state.profilePage.newPostText });
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'CHANGE_POST_TEXT') {
            this._state.profilePage.newPostText = action.text;
            this._callSubscriber(this._state);
        }
    }

}

export default store;