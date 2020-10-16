import React from 'react';
import styles from './MyInfoText.module.css';
import Status from './Status';

const MyInfoText = ({
    about,
    fullName,
    lookingForAJob,
    lookingForAJobDescription,
    contacts,
    userStatus,
    updateUserStatus,
}) => {
    let contactsItems = [];
    for (let key in contacts) {
        contactsItems.push(
            <li key={key}>
                {contacts[key] && <a href={contacts[key]}>{key}</a>}
            </li>
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
                <li>
                    <Status
                        userStatus={userStatus}
                        updateUserStatus={updateUserStatus}
                    />
                </li>
            </ul>
        </div>
    );
};

export default MyInfoText;
