import React from 'react';
import styles from './Background.module.css';

const Background = () => {
    return (
        <div className={styles.background}>
            <img
                src='https://img.freepik.com/free-photo/mexican-sunflower-field-panorama_1388-172.jpg?size=626&ext=jpg'
                alt=''
            />
        </div>
    );
};

export default Background;
