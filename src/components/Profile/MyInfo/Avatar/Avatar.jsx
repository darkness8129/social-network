import React from 'react';
import styles from './Avatar.module.css';

const Avatar = () => {
    return (
        <img
            src='https://www.w3schools.com/howto/img_avatar.png'
            alt=''
            className={styles.avatar}
        />
    );
};

export default Avatar;
