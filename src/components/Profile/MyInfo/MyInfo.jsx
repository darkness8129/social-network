import React from 'react';
import styles from './MyInfo.module.css';
import Avatar from './Avatar/Avatar';
import MyInfoText from './MyInfoText/MyInfoText';

const MyInfo = ({
    userProfile,
    userStatus,
    updateUserStatus,
    uploadAvatar,
    isOwner,
}) => {
    const {
        aboutMe,
        fullName,
        lookingForAJob,
        lookingForAJobDescription,
        contacts,
    } = userProfile;

    const onAvatarChange = (e) => {
        if (e.target.files.length) {
            uploadAvatar(e.target.files[0]);
        }
    };

    return (
        <div className={styles.myInfo}>
            <Avatar avatarImg={userProfile.photos.small} />
            {isOwner && <input type='file' onChange={onAvatarChange} />}
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
