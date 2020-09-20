import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ posts, newPostText, addPost, changePostText }) => {
    const handleNewPostTextChange = (e) => {
        let text = e.target.value;
        changePostText(text);
    };

    return (
        <div>
            <h2 className='title'>My posts</h2>
            <textarea
                placeholder='your news...'
                className={styles.postInput}
                onChange={handleNewPostTextChange}
                value={newPostText}
            />
            <button onClick={addPost}>Add post</button>
            <div>
                {posts.map((post) => {
                    return <Post postText={post.postText} key={post.id} />;
                })}
            </div>
        </div>
    );
};

export default MyPosts;
