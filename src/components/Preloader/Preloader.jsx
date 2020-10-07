import React from 'react';
import styles from './Preloader.module.css';

const Preloader = () => {
    return (
        <div class={styles.preloader}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Preloader;
