import React from 'react';
// import styles from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import MyInfo from './MyInfo/MyInfo';
import Background from './Background/Background';
import Preloader from '../common/Preloader/Preloader';

const Profile = ({
    userProfile,
    userStatus,
    updateUserStatus,
    uploadAvatar,
    isOwner,
    updateUserProfile,
    profileUpdateSuccess,
}) => {
    return !userProfile ? (
        <Preloader />
    ) : (
        <div>
            <Background />
            <MyInfo
                userProfile={userProfile}
                userStatus={userStatus}
                updateUserStatus={updateUserStatus}
                uploadAvatar={uploadAvatar}
                isOwner={isOwner}
                updateUserProfile={updateUserProfile}
                profileUpdateSuccess={profileUpdateSuccess}
            />
            <MyPostsContainer />
        </div>
    );
};

export default Profile;
