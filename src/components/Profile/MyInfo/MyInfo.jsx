import React from 'react';
import styles from './MyInfo.module.css';
import Avatar from './Avatar/Avatar';
import MyInfoText from './MyInfoText/MyInfoText';

const MyInfo = ({ userProfile }) => {
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
            />
        </div>
    );
};

export default MyInfo;
