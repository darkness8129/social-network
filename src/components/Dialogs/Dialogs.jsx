import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogsItem name='Sasha' id={1} />
                <DialogsItem name='Katya' id={2} />
                <DialogsItem name='Olya' id={3} />
                <DialogsItem name='Oleg' id={4} />
                <DialogsItem name='Dima' id={5} />
                <DialogsItem name='Lena' id={6} />
                <DialogsItem name='Maksym' id={7} />
            </div>
            <div className={styles.messages}>
                <Message messageText='Hello!' />
                <Message messageText='Hi!' />
                <Message messageText='How are you?' />
                <Message messageText='I am fine.' />
            </div>
        </div>
    );
};

export default Dialogs;
