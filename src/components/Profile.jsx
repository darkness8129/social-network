import React from 'react';

const Profile = () => {
    return (
        <div className='content'>
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
