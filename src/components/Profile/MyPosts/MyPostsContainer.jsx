import React from 'react';
import MyPosts from './MyPosts';
import {
    addPostActionCreator,
    changeNewPostTextActionCreator,
} from './../../../redux/profileReducer';

const MyPostsContainer = ({ store }) => {
    const state = store.getState();

    const addPost = () => {
        store.dispatch(addPostActionCreator());
    };

    const onNewPostTextChange = (text) => {
        store.dispatch(changeNewPostTextActionCreator(text));
    };
    console.log(state.profilePage.posts);

    return (
        <MyPosts
            addPost={addPost}
            changePostText={onNewPostTextChange}
            newPostText={state.profilePage.newPostText}
            posts={state.profilePage.posts}
        />
    );
};

export default MyPostsContainer;
