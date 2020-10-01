const SEND_MESSAGE = 'SEND_MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE_NEW_MESSAGE_TEXT';

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
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { messageText: state.newMessageText, id: 4 }],
                newMessageText: ''
            };
        case CHANGE_NEW_MESSAGE_TEXT:
            return { ...state, newMessageText: action.messageText };
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const changeNewMessageTextActionCreator = (messageText) => ({ type: CHANGE_NEW_MESSAGE_TEXT, messageText: messageText });

export default dialogsReducer;