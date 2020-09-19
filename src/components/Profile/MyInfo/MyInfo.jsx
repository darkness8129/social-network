import React from 'react';
import styles from './MyInfo.module.css';
import Avatar from './Avatar/Avatar';
import MyInfoText from './MyInfoText/MyInfoText';

const MyInfo = () => {
    return (
        <div className={styles.myInfo}>
            <Avatar />
            <MyInfoText />
        </div>
    );
};

export default MyInfo;
