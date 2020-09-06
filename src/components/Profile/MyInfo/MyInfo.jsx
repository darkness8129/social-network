import React from 'react';
import styles from './MyInfo.module.css';

const MyInfo = () => {
    return (
        <div className={styles.myInfo}>
            <img
                src='https://www.w3schools.com/howto/img_avatar.png'
                alt=''
                className={styles.avatar}
            />
            <div className={styles.item}>
                <span style={{ marginBottom: 10 + 'px', display: 'block' }}>
                    Yaroslav Yu
                </span>
                <ul className={styles.infoList}>
                    <li>Date of birthday: 16 Jul</li>
                    <li>City: Kyiv</li>
                    <li>Education: high</li>
                    <li>Web Site: blabla.com</li>
                </ul>
            </div>
        </div>
    );
};

export default MyInfo;
