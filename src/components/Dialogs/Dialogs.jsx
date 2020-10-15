import React from 'react';
import styles from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
const Dialogs = ({
    dialogs,
    messages,
    sendMessage,
    changeNewMessageText,
    newMessageText,
    isAuth,
}) => {
    const dialogsItems = dialogs.map((dialog) => {
        return (
            <DialogsItem name={dialog.name} id={dialog.id} key={dialog.id} />
        );
    });

    const messagesItems = messages.map((message) => {
        return <Message messageText={message.messageText} key={message.id} />;
    });

    const handleSendMessage = () => {
        sendMessage();
    };

    const handleChangeNewMessageText = (e) => {
        let messageText = e.target.value;
        changeNewMessageText(messageText);
    };

    if (!isAuth) return <Redirect to='/login' />;

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>{dialogsItems}</div>
            <div className={styles.messages}>
                {messagesItems}
                <textarea
                    onChange={handleChangeNewMessageText}
                    value={newMessageText}
                ></textarea>
                <button onClick={handleSendMessage}>send message</button>
            </div>
        </div>
    );
};

export default Dialogs;
