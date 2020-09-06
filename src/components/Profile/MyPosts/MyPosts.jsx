import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <h2 className='title'>My posts</h2>
            <input
                type='textarea'
                placeholder='your news...'
                className={styles.postInput}
            />
            <div>
                <Post postText='Test post 1' />
                <Post postText='Test post 2' />
                <Post postText='Test post 3' />
            </div>
        </div>
    );
};

export default MyPosts;
