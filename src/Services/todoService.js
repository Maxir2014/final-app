import { authHeader } from '../Utils';
import { loginApi , allUsers } from "../Utils";
import { User } from '../Entities';

const login = (email, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };
    return fetch(loginApi, requestOptions)
        .then(handleResponse)
        .then(data => {
            let user = new User(data.user);
            console.log(user);
            user.setToken(data.token);
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
};

const logout = () =>  {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    return true;
};

const register = (user) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`/users/register`, requestOptions).then(handleResponse);
};

const update = (user) => {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`/users/${user.id}`, requestOptions).then(handleResponse);;
};

const getAll = () => {
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json' },
    };
    return fetch(allUsers, requestOptions)
        .then(handleResponse)
        .then(data => {
            return data;
        });
};

const handleResponse = (response) => {
    return response.text().then(text => {
        const res = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
               //window.location.reload(true);
            }
            const error = (res && res.message) || response.statusText;
            return Promise.reject(error);
        }
        return res.data;
    })
};

export const userService = {
    login,
    logout,
    register,
    update,
    getAll,
    handleResponse
};
