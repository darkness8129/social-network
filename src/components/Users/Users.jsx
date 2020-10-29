import React from 'react';
import Paginator from './../common/Paginator/Paginator';
import Preloader from './../common/Preloader/Preloader';
import styles from './Users.module.css';
import UsersList from './UsersList/UsersList';

const Users = ({
    totalUsersCount,
    pageSize,
    onPageChange,
    currentPage,
    users,
    follow,
    unfollow,
    followingInProgress,
    isLoading,
}) => {
    return (
        <div>
            <Paginator
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={onPageChange}
                portionSize={10}
            />
            {isLoading ? (
                <Preloader />
            ) : (
                <UsersList
                    users={users}
                    follow={follow}
                    unfollow={unfollow}
                    followingInProgress={followingInProgress}
                />
            )}
        </div>
    );
};

export default Users;
