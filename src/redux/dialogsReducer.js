import * as ActionTypes from './actionTypes';

const initialState = {
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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { messageText: action.newMessageBody, id: 4 }]
            };
        default:
            return state;
    }
}

export default dialogsReducer;