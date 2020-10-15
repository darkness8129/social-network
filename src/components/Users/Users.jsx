import React from 'react';
import { Link } from 'react-router-dom';
import userPlaceholder from './../../assets/placeholder-user.jpg';
import styles from './Users.module.css';

const Users = ({
    totalUsersCount,
    pageSize,
    onPageChange,
    currentPage,
    users,
    follow,
    unfollow,
    followingInProgress,
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
                        className={currentPage === btn ? styles.active : null}
                    >
                        {btn}
                    </span>
                );
            })}
            {users.map((user) => {
                return (
                    <div key={user.id}>
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
                                    unfollow(user.id);
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
                                    follow(user.id);
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
