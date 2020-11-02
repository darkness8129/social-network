import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {
    setCurrentPage,
    toggleFollowingInProgress,
} from './../../redux/reducers/usersReducer';
import {
    requestUsers,
    follow,
    unfollow,
} from '../../redux/reducers/usersReducer';
import {
    getCurrentPage,
    getPageSize,
    getUsers,
    getTotalUsersCount,
    getIsLoading,
    getFollowingInProgress,
} from '../../redux/selectors/usersSelectors';

const UsersContainer = (props) => {
    useEffect(() => {
        props.requestUsers(props.currentPage, props.pageSize);
    }, []);

    const onPageChange = (page) => {
        props.setCurrentPage(page);
        props.requestUsers(page, props.pageSize);
    };

    return (
        <Users
            isLoading={props.isLoading}
            users={props.users}
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            onPageChange={onPageChange}
            follow={props.follow}
            unfollow={props.unfollow}
            followingInProgress={props.followingInProgress}
            toggleFollowingInProgress={props.toggleFollowingInProgress}
        />
    );
};

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        isLoading: getIsLoading(state),
        followingInProgress: getFollowingInProgress(state),
    };
};

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingInProgress,
    requestUsers,
})(UsersContainer);
