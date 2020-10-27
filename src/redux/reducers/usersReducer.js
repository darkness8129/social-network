import { usersApi } from '../../api/api';

// Initial State
const initialState = {
    users: [],
    currentPage: 1,
    pageSize: 10,
    totalUsersCount: 0,
    isLoading: false,
    followingInProgress: []
}

// Action Types
const FOLLOW = 'social-network/users/FOLLOW';
const UNFOLLOW = 'social-network/users/UNFOLLOW';
const SET_USERS = 'social-network/users/SET_USERS';
const SET_CURRENT_PAGE = 'social-network/users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'social-network/users/SET_TOTAL_USERS_COUNT';
const SET_IS_LOADING = 'social-network/users/SET_IS_LOADING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'social-network/users/TOGGLE_FOLLOWING_IN_PROGRESS'

// Reducer
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true };
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false };
                    }
                    return user;
                })
            }
        case SET_USERS:
            return { ...state, users: [...action.users] }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalCount }
        case SET_IS_LOADING:
            return { ...state, isLoading: action.isLoading }
        case TOGGLE_FOLLOWING_IN_PROGRESS:
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

// Action Creators
export const followSuccess = (userId) => ({
    type: FOLLOW,
    userId
});
export const unfollowSuccess = (userId) => ({
    type: UNFOLLOW,
    userId
});
export const setUsers = (users) => ({
    type: SET_USERS,
    users
});
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
});
export const setTotalUsersCount = (totalCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount
});
export const setIsLoading = (isLoading) => ({
    type: SET_IS_LOADING,
    isLoading
});
export const toggleFollowingInProgress = (isLoading, userId) => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    isLoading,
    userId
});

// Thunk Creators
export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setIsLoading(true));

    const data = await usersApi.getUsers(currentPage, pageSize)

    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(setIsLoading(false));
}

const followUnfollowFlow = async (dispatch, apiMethod, action, userId) => {
    const data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(action(userId));
    }
    dispatch(toggleFollowingInProgress(
        false,
        userId
    ));
}

export const follow = (userId) => (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));
    followUnfollowFlow(dispatch, usersApi.follow.bind(usersApi), followSuccess, userId);
}

export const unfollow = (userId) => (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));
    followUnfollowFlow(dispatch, usersApi.unfollow.bind(usersApi), unfollowSuccess, userId)
}

export default usersReducer;