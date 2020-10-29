import React from 'react';
import styles from './MyInfo.module.css';
import Avatar from './Avatar/Avatar';
import MyInfoText from './MyInfoText/MyInfoText';
import { useState } from 'react';
import MyInfoForm from './MyInfoForm/MyInfoForm';
import Status from './Status/Status';

const MyInfo = ({
    userProfile,
    userStatus,
    updateUserStatus,
    uploadAvatar,
    isOwner,
    updateUserProfile,
    profileUpdateSuccess,
}) => {
    const [editMode, setEditMode] = useState(false);

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

    const submitEditing = (updatedInfo) => {
        updateUserProfile(updatedInfo);
        if (profileUpdateSuccess) {
            setEditMode(false);
        }
    };

    return (
        <div className={styles.myInfo}>
            <Avatar avatarImg={userProfile.photos.small} />
            {isOwner && <input type='file' onChange={onAvatarChange} />}
            {editMode ? (
                <MyInfoForm
                    onSubmit={submitEditing}
                    contacts={contacts}
                    initialValues={userProfile}
                />
            ) : (
                <MyInfoText
                    about={aboutMe}
                    fullName={fullName}
                    lookingForAJob={lookingForAJob}
                    lookingForAJobDescription={lookingForAJobDescription}
                    contacts={contacts}
                    isOwner={isOwner}
                    enableEditMode={() => setEditMode(true)}
                />
            )}
            <Status
                userStatus={userStatus}
                updateUserStatus={updateUserStatus}
            />
        </div>
    );
};

export default MyInfo;
