import React from 'react';
import styles from './MyInfoText.module.css';

const MyInfoText = () => {
    return (
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
    );
};

export default MyInfoText;
