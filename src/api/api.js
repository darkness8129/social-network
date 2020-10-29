import * as axios from 'axios';

// general settings of requests
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY':
            '5f5affce-b801-432d-8486-f8c4af5d9ed5',
    },
})

// for users page
export const usersApi = {
    // get users from server (currentPage - page that we need, pageSize - number of users on one page)
    async getUsers(currentPage = 1, pageSize = 5) {
        const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
        return response.data;
    },
    // follow user 
    async follow(userId) {
        const response = await instance.post(`follow/${userId}`);
        return response.data;
    },
    // unfollow user
    async unfollow(userId) {
        const response = await instance.delete(`follow/${userId}`);
        return response.data;
    }
}

// for auth
export const authApi = {
    // get id, email, login of user if auth
    async getAuth() {
        const response = await instance.get(`auth/me`);
        return response.data;
    },
    // login 
    async login({ email, password, rememberMe = false }) {
        const response = await instance.post('/auth/login',
            { email, password, rememberMe });
        return response.data;
    },
    // logout
    async logout() {
        const response = await instance.delete('/auth/login');
        return response.data;
    }
}

// for profile page
export const userProfileApi = {
    // get profile of user with userID
    async getUserProfile(userId) {
        const response = await instance.get(`profile/${userId}`)
        return response.data;
    },
    // get status of user with userID
    async getStatus(userId) {
        const response = await instance.get(`profile/status/${userId}`);
        return response.data;
    },
    // update status(only if auth)
    async updateStatus(userStatus) {
        const response = await instance.put('profile/status', {
            status: userStatus
        })
        return response.data;
    },
    // update user avatar(only if auth)
    async uploadAvatar(photo) {
        // we need form data, because we send file, not JSON
        const formData = new FormData();
        // image - because api need this name
        formData.append('image', photo)
        const response = await instance.put(`profile/photo`, formData);
        return response.data;
    },
    // update user profile
    async updateUserProfile(updatedInfo) {
        const response = await instance.put('profile', updatedInfo)
        return response.data;
    },
}
