import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY':
            '5f5affce-b801-432d-8486-f8c4af5d9ed5',
    },
})

const userApi = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance
            .get(
                `users?page=${currentPage}&count=${pageSize}`
            )
            .then(response => response.data);

    },
    getAuth() {
        return instance
            .get(
                `auth/me`
            )
            .then(response => response.data)

    },
    getUserProfile(userId) {
        return instance
            .get(
                `profile/${userId}`
            )
            .then(response => response.data);
    },
    follow(userId) {
        return instance
            .post(
                `follow/${userId}`
            )
            .then(response => response.data);
    },
    unfollow(userId) {
        return instance
            .delete(
                `follow/${userId}`
            )
            .then(response => response.data);
    }
}

export default userApi;