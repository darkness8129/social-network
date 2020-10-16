import React from 'react';
import styles from './MyInfo.module.css';
import Avatar from './Avatar/Avatar';
import MyInfoText from './MyInfoText/MyInfoText';

const MyInfo = ({ userProfile, userStatus, updateUserStatus }) => {
    return (
        <div className={styles.myInfo}>
            <Avatar avatarImg={userProfile.photos.small} />
            <MyInfoText
                about={userProfile.aboutMe}
                fullName={userProfile.fullName}
                lookingForAJob={userProfile.lookingForAJob}
                lookingForAJobDescription={
                    userProfile.lookingForAJobDescription
                }
                contacts={userProfile.contacts}
                userStatus={userStatus}
                updateUserStatus={updateUserStatus}
            />
        </div>
    );
};

export default MyInfo;
