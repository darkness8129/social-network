import React from 'react';
// import styles from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import MyInfo from './MyInfo/MyInfo';
import Background from './Background/Background';
import Preloader from '../Preloader/Preloader';

const Profile = ({ userProfile }) => {
    return !userProfile ? (
        <Preloader />
    ) : (
        <div>
            <Background />
            <MyInfo userProfile={userProfile} />
            <MyPostsContainer />
        </div>
    );
};

export default Profile;
