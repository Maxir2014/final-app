const environment = 'local';
const localApi = 'http://localhost:4500/api/';
const productionApi = 'https://mcga-server-todo.herokuapp.com/api/';
const getApi = () => { return (environment === 'local') ? localApi : productionApi};

const loginApi = getApi()+'auth/login';
const createUser = getApi()+'users/create';
const allUsers = getApi()+'users/list';
const createTodo = getApi()+'todo/create';
const todoEdit = getApi()+'todo/edit';
export {
    getApi,
    loginApi,
    allUsers,
    createTodo,
    todoEdit
};
