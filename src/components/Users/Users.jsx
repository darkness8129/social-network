import React from 'react';
import * as axios from 'axios';
import userPlaceholder from './../../assets/placeholder-user.jpg';
import styles from './Users.module.css';

class Users extends React.Component {
    constructor(props) {
        super(props);

        this.onPageChange = this.onPageChange.bind(this);
    }

    componentDidMount() {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChange(page) {
        this.props.setCurrentPage(page);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    render() {
        const numberOfPages = Math.ceil(
            this.props.totalUsersCount / this.props.pageSize
        );

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
                            onClick={() => this.onPageChange(btn)}
                            className={
                                this.props.currentPage === btn && styles.active
                            }
                        >
                            {btn}
                        </span>
                    );
                })}
                {this.props.users.map((user) => {
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
                                <button
                                    onClick={() => this.props.follow(user.id)}
                                >
                                    Follow
                                </button>
                            )}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Users;
