import React from 'react';
import userPlaceholder from './../../assets/placeholder-user.jpg';
import styles from './Users.module.css';

const Users = ({
    totalUsersCount,
    pageSize,
    onPageChange,
    currentPage,
    users,
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
                        <img
                            src={
                                user.photos.small
                                    ? user.photos.small
                                    : userPlaceholder
                            }
                            className={styles.userImg}
                        ></img>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                        <div>
                            <div>{'user.location.country'} </div>
                            <div>{'user.location.city'}</div>
                        </div>
                        {user.followed === true ? (
                            <button
                                onClick={() => this.props.unfollow(user.id)}
                            >
                                Unfollow
                            </button>
                        ) : (
                            <button onClick={() => this.props.follow(user.id)}>
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
