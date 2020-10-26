import React from 'react';
import styles from './MyInfo.module.css';
import Avatar from './Avatar/Avatar';
import MyInfoText from './MyInfoText/MyInfoText';

const MyInfo = ({ userProfile, userStatus, updateUserStatus }) => {
    const {
        aboutMe,
        fullName,
        lookingForAJob,
        lookingForAJobDescription,
        contacts,
    } = userProfile;
    return (
        <div className={styles.myInfo}>
            <Avatar avatarImg={userProfile.photos.small} />
            <MyInfoText
                about={aboutMe}
                fullName={fullName}
                lookingForAJob={lookingForAJob}
                lookingForAJobDescription={lookingForAJobDescription}
                contacts={contacts}
                userStatus={userStatus}
                updateUserStatus={updateUserStatus}
            />
        </div>
    );
};

export default MyInfo;
