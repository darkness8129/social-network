import { connect } from 'react-redux';
import Users from './Users';
import {
    followActionCreator,
    unfollowActionCreator,
    setUsersActionCreator,
    setTotalUsersCountActionCreator,
    setCurrentPageActionCreator,
} from './../../redux/actionCreators';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followActionCreator(userId)),
        unfollow: (userId) => dispatch(unfollowActionCreator(userId)),
        setUsers: (users) => dispatch(setUsersActionCreator(users)),
        setTotalUsersCount: (totalCount) =>
            dispatch(setTotalUsersCountActionCreator(totalCount)),
        setCurrentPage: (currentPage) =>
            dispatch(setCurrentPageActionCreator(currentPage)),
    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
