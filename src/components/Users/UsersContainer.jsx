import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from './../Preloader/Preloader';
import {
    setCurrentPage,
    toggleFollowingInProgress,
} from './../../redux/actionCreators';
import { getUsers, follow, unfollow } from '../../redux/usersReducer';

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);

        this.onPageChange = this.onPageChange.bind(this);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChange(page) {
        this.props.setCurrentPage(page);
        this.props.getUsers(page, this.props.pageSize);
    }

    render() {
        return this.props.isLoading === true ? (
            <Preloader />
        ) : (
            <Users
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChange={this.onPageChange}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
                toggleFollowingInProgress={this.props.toggleFollowingInProgress}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress,
    };
};

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingInProgress,
    getUsers,
})(UsersContainer);
