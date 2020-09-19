import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import MyInfo from './MyInfo/MyInfo';
import Background from './Background/Background';

const Profile = ({ state, dispatch }) => {
    return (
        <div>
            <Background />
            <MyInfo />
            <MyPosts
                posts={state.posts}
                newPostText={state.newPostText}
                dispatch={dispatch}
            />
        </div>
    );
};

export default Profile;
