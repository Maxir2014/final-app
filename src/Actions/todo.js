import {todoConstants } from '../Constants';
import {todoService } from '../Services';
import { alertActions } from './';
import {thingsTodo} from "../Reducers/todo";



export const todoActions = {
    create,
    getTodoList,
    removeTodo,
    finishTodo,
    recoverTodo,
    finishEdition

};

function getTodoList() {
    return dispatch => {
        dispatch(request());
        todoService.getTodoList()
            .then(
                itemList => dispatch(success(itemList)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: todoConstants.LIST_REQUEST } }
    function success(itemList) { return { type: todoConstants.GET_LIST, itemList } }
    function failure(error) { return { type: todoConstants.TODO_FAILURE, error } }
}

function removeTodo(todoId) {
    console.log(todoId);
    return (dispatch) => {
        todoService.removeTodoId(todoId)
            .then(
                response => {
                    dispatch(success(todoId));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function success(todoId) { return { type: todoConstants.REMOVE_TODO, todoId } }
    function failure(error) { return { type: todoConstants.REMOVE_TODO_FAIL, error } }
}

function finishTodo(todoThing) {
    return (dispatch) => {
        todoService.finishTodoId(todoThing)
            .then(
                response => {
                    dispatch(success(todoThing._id));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
    function success(todoThing) { return { type: todoConstants.FINISHED_TODO, todoThing } }
    function failure(error) { return { type: todoConstants.FINISHED_TODO_FAIL, error } }
}

function finishEdition(todoThing) {
    return (dispatch) => {
        todoService.finishEdition(todoThing)
            .then(
                response => {
                    dispatch(success(todoThing._id));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
    function success(todoThing) { return { type: todoConstants.FINISH_TODO_EDITION, todoThing } }
    function failure(error) { return { type: todoConstants.FINISH_TODO_EDITION_FAIL, error } }
}


function recoverTodo(todoId) {
    return (dispatch) => {
        todoService.recoverTodo(todoId)
            .then(
                response => {
                    dispatch(success(response));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
    function success(todoThing) { return { type: todoConstants.RECOVER_TODO, todoThing } }
    function failure(error) { return { type: todoConstants.RECOVER_TODO_FAIL, error } }
}



function create(todo) {
    return (dispatch) => {
        todoService.create(todo)
            .then(
                todo => {
                    dispatch(success(todo));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function success(todo) { return { type: todoConstants.CREATE_TODO, todo } }
    function failure(error) { return { type: todoConstants.TODO_FAILURE, error } }
}
