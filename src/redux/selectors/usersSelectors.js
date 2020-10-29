export const getUsers = (state) => {
    return state.usersPage.users;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getIsLoading = (state) => {
    return state.usersPage.isLoading;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}