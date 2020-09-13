import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = ({ dialogs, messages }) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogs.map((dialog) => {
                    return (
                        <DialogsItem
                            name={dialog.name}
                            id={dialog.id}
                            key={dialog.id}
                        />
                    );
                })}
            </div>
            <div className={styles.messages}>
                {messages.map((message) => {
                    return (
                        <Message
                            messageText={message.messageText}
                            key={message.id}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Dialogs;
