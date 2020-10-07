import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from './../Preloader/Preloader';
import * as axios from 'axios';
import {
    follow,
    unfollow,
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    setIsLoading,
} from './../../redux/actionCreators';

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);

        this.onPageChange = this.onPageChange.bind(this);
    }

    componentDidMount() {
        this.props.setIsLoading(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.setIsLoading(false);
            });
    }

    onPageChange(page) {
        this.props.setCurrentPage(page);
        this.props.setIsLoading(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.setIsLoading(false);
            });
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
    };
};

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    setIsLoading,
})(UsersContainer);
