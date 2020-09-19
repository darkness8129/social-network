import React from 'react';
import styles from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = ({ state }) => {
    const dialogs = state.dialogs.map((dialog) => {
        return (
            <DialogsItem name={dialog.name} id={dialog.id} key={dialog.id} />
        );
    });

    const messages = state.messages.map((message) => {
        return <Message messageText={message.messageText} key={message.id} />;
    });

    const textArea = React.createRef();
    const sendMessage = () => {
        alert(textArea.current.value);
    };
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>{dialogs}</div>
            <div className={styles.messages}>
                {messages}
                <textarea ref={textArea}></textarea>
                <button onClick={sendMessage}>send message</button>
            </div>
        </div>
    );
};

export default Dialogs;
