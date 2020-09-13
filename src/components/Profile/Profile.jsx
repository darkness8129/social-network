import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import MyInfo from './MyInfo/MyInfo';
import Background from './Background/Background';

const Profile = ({ posts }) => {
    return (
        <div>
            <Background />
            <MyInfo />
            <MyPosts posts={posts} />
        </div>
    );
};

export default Profile;
