import React from 'react';
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

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);

        this.onPageChange = this.onPageChange.bind(this);
    }

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChange(page) {
        this.props.setCurrentPage(page);
        this.props.requestUsers(page, this.props.pageSize);
    }

    render() {
        return (
            <Users
                isLoading={this.props.isLoading}
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
