import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DialogsItem.module.css';

const DialogsItem = ({ name, id }) => {
    return (
        <div className={styles.item}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    );
};

export default DialogsItem;
