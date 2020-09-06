import React from 'react';
import styles from './Post.module.css';

const Post = ({postText}) => {
return <div className={styles.item}>{postText}</div>;
};

export default Post;
