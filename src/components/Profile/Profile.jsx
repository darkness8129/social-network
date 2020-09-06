import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import MyInfo from './MyInfo/MyInfo';
import Background from './Background/Background';

const Profile = () => {
    return (
        <div>
            <Background />
            <MyInfo />
            <MyPosts />
        </div>
    );
};

export default Profile;
