import React from 'react';
import styles from './Avatar.module.css';

const Avatar = ({ avatarImg }) => {
    return <img src={avatarImg} alt='Avatar' className={styles.avatar} />;
};

export default Avatar;
