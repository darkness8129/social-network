import React from 'react';
import styles from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import MyInfo from './MyInfo/MyInfo';
import Background from './Background/Background';

const Profile = ({ store }) => {
    return (
        <div>
            <Background />
            <MyInfo />
            <MyPostsContainer store={store} />
        </div>
    );
};

export default Profile;
