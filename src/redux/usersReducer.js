import { setIsLoading, setTotalUsersCount, setUsers, toggleFollowingInProgress, followSuccess, unfollowSuccess } from './actionCreators';
import * as ActionTypes from './actionTypes';
import { usersApi } from '../api/api';

const initialState = {
    users: [],
    currentPage: 1,
    pageSize: 5,
    totalUsersCount: 0,
    isLoading: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FOLLOW:
            return {
                ...state, users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true };
                    }
                    return user;
                })
            }
        case ActionTypes.UNFOLLOW:
            return {
                ...state, users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false };
                    }
                    return user;
                })
            }
        case ActionTypes.SET_USERS:
            return { ...state, users: [...action.users] }
        case ActionTypes.SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case ActionTypes.SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalCount }
        case ActionTypes.SET_IS_LOADING:
            return { ...state, isLoading: action.isLoading }
        case ActionTypes.TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isLoading
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(userId => userId !== action.userId)
            }
        default:
            return state;
    }
}

export const requestUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(setIsLoading(true));

    usersApi
        .getUsers(currentPage, pageSize)
        .then((data) => {
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
            dispatch(setIsLoading(false));
        });
}

export const follow = userId => dispatch => {
    dispatch(toggleFollowingInProgress(true, userId));

    usersApi.follow(userId).then((data) => {
        if (data.resultCode === 0) {
            dispatch(followSuccess(userId));
        }
        dispatch(toggleFollowingInProgress(
            false,
            userId
        ));
    });
}

export const unfollow = userId => dispatch => {
    dispatch(toggleFollowingInProgress(true, userId));

    usersApi.unfollow(userId).then((data) => {
        if (data.resultCode === 0) {
            dispatch(unfollowSuccess(userId));
        }
        dispatch(toggleFollowingInProgress(
            false,
            userId
        ));
    });
}

export default usersReducer;