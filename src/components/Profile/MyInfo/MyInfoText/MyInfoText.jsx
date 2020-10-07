import React from 'react';
import styles from './MyInfoText.module.css';

const MyInfoText = ({
    about,
    fullName,
    lookingForAJob,
    lookingForAJobDescription,
    contacts,
}) => {
    let contactsItems = [];
    for (let key in contacts) {
        contactsItems.push(
            <li>{contacts[key] && <a href={contacts[key]}>{key}</a>}</li>
        );
    }

    return (
        <div className={styles.item}>
            <span style={{ marginBottom: 10 + 'px', display: 'block' }}>
                {fullName}
            </span>
            <ul className={styles.infoList}>
                <li>About me: {about}</li>
                <li>Looking for a job: {lookingForAJob ? 'yes' : 'no'}</li>
                <li>Description of job: {lookingForAJobDescription}</li>
                <li>
                    Contacts:
                    <ul>{contactsItems}</ul>
                </li>
            </ul>
        </div>
    );
};

export default MyInfoText;
