import { authHeader } from '../Utils';
import { createTodo  , todoEdit, getApi } from "../Utils";
import {userService} from "./userService";


const getTodoList = () => {

    let user = JSON.parse(localStorage.getItem('user'));

    const Authorization = `Bearer ${user.token}`;
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': Authorization },
    };
    const url = getApi()+'users/'+user.id+'/todo';
    return fetch(url, requestOptions)
        .then(handleResponse)
        .then(data => {
            return data.thingsTodo;
        });
};



const removeTodoId = (todoId) => {
    let user = JSON.parse(localStorage.getItem('user'));

    const Authorization = `Bearer ${user.token}`;
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', 'Authorization': Authorization },
    };
    const url = getApi()+'todo/'+todoId;
    return fetch(url, requestOptions)
        .then(handleResponse)
        .then(data => {
            return data;
        });
};
const finishTodoId = (todoThing) => {
    let user = JSON.parse(localStorage.getItem('user'));
    const Authorization = `Bearer ${user.token}`;
    todoThing.status = 'finished';

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': Authorization },
        body: JSON.stringify(todoThing)
    };
    const url = todoEdit+'/'+todoThing._id;
    return fetch(url, requestOptions)
        .then(handleResponse)
        .then(data => {
            return data;
        });
};

const finishEdition = (todoThing) => {
    let user = JSON.parse(localStorage.getItem('user'));
    const Authorization = `Bearer ${user.token}`;
    todoThing.status = 'pending';

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': Authorization },
        body: JSON.stringify(todoThing)
    };
    const url = todoEdit+'/'+todoThing._id;
    return fetch(url, requestOptions)
        .then(handleResponse)
        .then(data => {
            return data.todo;
        });
};


const recoverTodo = (todoId) => {
    let user = JSON.parse(localStorage.getItem('user'));

    const Authorization = `Bearer ${user.token}`;
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': Authorization },
    };
    const url = getApi()+'todo/'+todoId;
    return fetch(url, requestOptions)
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
                // userService.logout();
               //window.location.reload(true);
            }
            const error = (res && res.message) || response.statusText;
            return Promise.reject(error);
        }

        return res.data;
    })
};

export const todoService = {
    getTodoList,
    handleResponse,
    removeTodoId,
    finishTodoId,
    recoverTodo,
    finishEdition
};
