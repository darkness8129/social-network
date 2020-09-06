import React from 'react';
import styles from './Profile.module.css';

const Profile = () => {
    return (
        <div className={styles.content}>
            <img
                src='https://img.8wallpapers.com/uploads/2019/05/c840462b97784e1db6e6bbe5.jpg'
                alt='profile-bg'
            />

            <div className='description'>img + descr</div>
            <div className='posts'>
                <input type='text' />
                <div className='post__item'>New post</div>
                <div className='post__item'>New post</div>
                <div className='post__item'>New post</div>
            </div>
        </div>
    );
};

export default Profile;
