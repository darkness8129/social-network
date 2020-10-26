import React from 'react';
import styles from './Avatar.module.css';
import userPlaceholder from './../../../../assets/placeholder-user.jpg';

const Avatar = ({ avatarImg }) => {
    return (
        <img
            src={avatarImg ? avatarImg : userPlaceholder}
            alt='Avatar'
            className={styles.avatar}
        />
    );
};

export default Avatar;
