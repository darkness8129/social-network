import React from 'react';
import styles from './MyInfoText.module.css';

const MyInfoText = ({
    about,
    fullName,
    lookingForAJob,
    lookingForAJobDescription,
    contacts,
    isOwner,
    enableEditMode,
}) => {
    return (
        <div className={styles.item}>
            <span style={{ marginBottom: 10 + 'px', display: 'block' }}>
                {fullName}
            </span>
            <ul className={styles.infoList}>
                <li>About me: {about}</li>
                <li>Looking for a job: {lookingForAJob ? 'yes' : 'no'}</li>
                {lookingForAJob && (
                    <li>Description of job: {lookingForAJobDescription}</li>
                )}
                <li>
                    Contacts:
                    <ul>
                        {Object.keys(contacts).map((key) => {
                            return (
                                <li key={key}>
                                    {key}:
                                    <a href={contacts.key}>{contacts.key}</a>
                                </li>
                            );
                        })}
                    </ul>
                </li>
                {isOwner && <button onClick={enableEditMode}>Edit info</button>}
            </ul>
        </div>
    );
};

export default MyInfoText;
