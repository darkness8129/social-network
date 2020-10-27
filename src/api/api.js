import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY':
            '5f5affce-b801-432d-8486-f8c4af5d9ed5',
    },
})

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance
            .get(
                `users?page=${currentPage}&count=${pageSize}`
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

export const authApi = {
    getAuth() {
        return instance
            .get(
                `auth/me`
            )
            .then(response => response.data)
    },
    login({ email, password, rememberMe = false }) {
        return instance
            .post('/auth/login', {
                email, password, rememberMe
            })
            .then(response => response.data);
    },
    logout() {
        return instance
            .delete('/auth/login')
            .then(response => response.data);
    }
}

export const userProfileApi = {
    getUserProfile(userId) {
        return instance
            .get(
                `profile/${userId}`
            )
            .then(response => response.data);
    },
    getStatus(userId) {
        return instance
            .get(`profile/status/${userId}`)
            .then(response => response.data);;
    },
    updateStatus(userStatus) {
        return instance
            .put('profile/status', {
                status: userStatus
            })
            .then(response => response.data);
    },
    uploadAvatar(photo) {
        const formData = new FormData();
        formData.append('image', photo)
        return instance
            .put(`profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(response => response.data);
    }
}
