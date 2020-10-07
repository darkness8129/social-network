import * as ActionTypes from './actionTypes';

const initialState = {
    users: [],
    currentPage: 1,
    pageSize: 5,
    totalUsersCount: 0,
    isLoading: false
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
        default:
            return state;
    }
}

export default usersReducer;