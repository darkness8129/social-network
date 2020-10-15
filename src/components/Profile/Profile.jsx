import React from 'react';
// import styles from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import MyInfo from './MyInfo/MyInfo';
import Background from './Background/Background';
import Preloader from '../Preloader/Preloader';

import { Redirect } from 'react-router-dom';

const Profile = ({ userProfile, isAuth }) => {
    if (!isAuth) return <Redirect to='/login' />;
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
