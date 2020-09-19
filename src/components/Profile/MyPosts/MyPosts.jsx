import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ posts, newPostText, dispatch }) => {
    const textArea = React.createRef();

    const handleAddPost = () => {
        dispatch({ type: 'ADD_POST' });
    };

    const handlePostTextChange = () => {
        let text = textArea.current.value;
        dispatch({ type: 'CHANGE_POST_TEXT', text: text });
    };

    return (
        <div>
            <h2 className='title'>My posts</h2>
            <textarea
                placeholder='your news...'
                className={styles.postInput}
                ref={textArea}
                onChange={handlePostTextChange}
                value={newPostText}
            />
            <button onClick={handleAddPost}>Add post</button>
            <div>
                {posts.map((post) => {
                    return <Post postText={post.postText} key={post.id} />;
                })}
            </div>
        </div>
    );
};

export default MyPosts;
