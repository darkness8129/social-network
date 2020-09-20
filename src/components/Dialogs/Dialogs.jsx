import React from 'react';
import styles from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import {
    sendMessageActionCreator,
    changeNewMessageTextActionCreator,
} from './../../redux/dialogsReducer';

const Dialogs = ({ state, dispatch }) => {
    const dialogs = state.dialogs.map((dialog) => {
        return (
            <DialogsItem name={dialog.name} id={dialog.id} key={dialog.id} />
        );
    });

    const messages = state.messages.map((message) => {
        return <Message messageText={message.messageText} key={message.id} />;
    });

    const textAreaMessage = React.createRef();

    const handleSendMessage = () => {
        dispatch(sendMessageActionCreator());
    };

    const handleChangeNewMessageText = (e) => {
        let messageText = e.target.value;
        dispatch(changeNewMessageTextActionCreator(messageText));
    };

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>{dialogs}</div>
            <div className={styles.messages}>
                {messages}
                <textarea
                    ref={textAreaMessage}
                    onChange={handleChangeNewMessageText}
                    value={state.newMessageText}
                ></textarea>
                <button onClick={handleSendMessage}>send message</button>
            </div>
        </div>
    );
};

export default Dialogs;
