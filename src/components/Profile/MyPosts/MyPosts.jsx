import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {
    addPostActionCreator,
    changeNewPostTextActionCreator,
} from './../../../redux/state';

const MyPosts = ({ posts, newPostText, dispatch }) => {
    const textArea = React.createRef();

    const handleAddPost = () => {
        dispatch(addPostActionCreator());
    };

    const handleNewPostTextChange = () => {
        let text = textArea.current.value;
        dispatch(changeNewPostTextActionCreator(text));
    };

    return (
        <div>
            <h2 className='title'>My posts</h2>
            <textarea
                placeholder='your news...'
                className={styles.postInput}
                ref={textArea}
                onChange={handleNewPostTextChange}
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
