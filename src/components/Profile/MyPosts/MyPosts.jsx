import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ posts }) => {
    return (
        <div>
            <h2 className='title'>My posts</h2>
            <input
                type='textarea'
                placeholder='your news...'
                className={styles.postInput}
            />
            <div>
                {posts.map((post) => {
                    return <Post postText={post.postText} key={post.id} />;
                })}
            </div>
        </div>
    );
};

export default MyPosts;
