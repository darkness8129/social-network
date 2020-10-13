import { act } from 'react-dom/test-utils';
import * as ActionTypes from './actionTypes';

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
                    : state.followingInProgress.filter(userId => userId != action.userId)
            }
        default:
            return state;
    }
}

export default usersReducer;