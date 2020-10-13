import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import userPlaceholder from './../../assets/placeholder-user.jpg';
import styles from './Users.module.css';
import userApi from '../../api/api';

const Users = ({
    totalUsersCount,
    pageSize,
    onPageChange,
    currentPage,
    users,
    follow,
    unfollow,
    followingInProgress,
    toggleFollowingInProgress,
}) => {
    const numberOfPages = Math.ceil(totalUsersCount / pageSize);

    const btns = [];

    for (let i = 1; i <= numberOfPages; i++) {
        btns.push(i);
    }

    return (
        <div>
            {btns.map((btn) => {
                return (
                    <span
                        key={btn}
                        onClick={() => onPageChange(btn)}
                        className={currentPage === btn && styles.active}
                    >
                        {btn}
                    </span>
                );
            })}
            {users.map((user) => {
                return (
                    <div>
                        <Link to={`/profile/${user.id}`}>
                            <img
                                src={
                                    user.photos.small
                                        ? user.photos.small
                                        : userPlaceholder
                                }
                                className={styles.userImg}
                                alt='User img'
                            ></img>
                        </Link>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                        <div>
                            <div>{'user.location.country'} </div>
                            <div>{'user.location.city'}</div>
                        </div>
                        {user.followed === true ? (
                            <button
                                onClick={() => {
                                    toggleFollowingInProgress(true, user.id);
                                    userApi.unfollow(user.id).then((data) => {
                                        if (data.resultCode === 0) {
                                            unfollow(user.id);
                                        }
                                        toggleFollowingInProgress(
                                            false,
                                            user.id
                                        );
                                    });
                                }}
                                disabled={followingInProgress.some(
                                    (id) => id === user.id
                                )}
                            >
                                Unfollow
                            </button>
                        ) : (
                            <button
                                onClick={() => {
                                    toggleFollowingInProgress(true, user.id);
                                    userApi.follow(user.id).then((data) => {
                                        if (data.resultCode === 0) {
                                            follow(user.id);
                                        }
                                        toggleFollowingInProgress(
                                            false,
                                            user.id
                                        );
                                    });
                                }}
                                disabled={followingInProgress.some(
                                    (id) => id === user.id
                                )}
                            >
                                Follow
                            </button>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Users;
