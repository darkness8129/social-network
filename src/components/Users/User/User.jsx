import React from 'react';
import { Link } from 'react-router-dom';
import userPlaceholder from './../../../assets/placeholder-user.jpg';
import styles from './User.module.css';

const User = ({
    userId,
    userPhoto,
    userName,
    userStatus,
    followed,
    followingInProgress,
    follow,
    unfollow,
}) => {
    return (
        <div>
            <Link to={`/profile/${userId}`}>
                <img
                    src={userPhoto ? userPhoto : userPlaceholder}
                    className={styles.userImg}
                    alt='User img'
                ></img>
            </Link>
            <div>{userName}</div>
            <div>{userStatus}</div>
            <div>
                <div>{'user.location.country'} </div>
                <div>{'user.location.city'}</div>
            </div>
            {followed === true ? (
                <button
                    onClick={() => {
                        unfollow(userId);
                    }}
                    disabled={followingInProgress.some((id) => id === userId)}
                >
                    Unfollow
                </button>
            ) : (
                <button
                    onClick={() => {
                        follow(userId);
                    }}
                    disabled={followingInProgress.some((id) => id === userId)}
                >
                    Follow
                </button>
            )}
        </div>
    );
};

export default User;
