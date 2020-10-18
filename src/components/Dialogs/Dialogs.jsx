import React from 'react';
import styles from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { Input } from './../common/forms/FormControl';
import { maxLength, required } from '../../utils/validators/validators';

const maxLength15 = maxLength(15);

const DialogMessageForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field
                component={Input}
                placeholder='Enter your message'
                name='newMessageBody'
                validate={[required, maxLength15]}
            />
            <button>Send message</button>
        </form>
    );
};

const ReduxDialogMessageForm = reduxForm({
    form: 'dialogMessageForm',
})(DialogMessageForm);

const Dialogs = ({ dialogs, messages, sendMessage }) => {
    const dialogsItems = dialogs.map((dialog) => {
        return (
            <DialogsItem name={dialog.name} id={dialog.id} key={dialog.id} />
        );
    });

    const messagesItems = messages.map((message) => {
        return <Message messageText={message.messageText} key={message.id} />;
    });

    const onSendMessage = (values) => {
        sendMessage(values.newMessageBody);
    };

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>{dialogsItems}</div>
            <div className={styles.messages}>
                {messagesItems}
                <ReduxDialogMessageForm onSubmit={onSendMessage} />
            </div>
        </div>
    );
};

export default Dialogs;
