import React from 'react';
import {
    sendMessageActionCreator,
    changeNewMessageTextActionCreator,
} from './../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = ({ store }) => {
    const state = store.getState();

    const sendMessage = () => {
        store.dispatch(sendMessageActionCreator());
    };

    const onChangeNewMessageText = (messageText) => {
        store.dispatch(changeNewMessageTextActionCreator(messageText));
    };

    return (
        <Dialogs
            changeMessageText={onChangeNewMessageText}
            sendMessage={sendMessage}
            newMessageText={state.dialogsPage.newMessageText}
            messages={state.dialogsPage.messages}
            dialogs={state.dialogsPage.dialogs}
        />
    );
};

export default DialogsContainer;
