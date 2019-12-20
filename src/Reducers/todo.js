import {todoConstants} from '../Constants';

export function thingsTodo(state = {}, action) {
    switch (action.type) {
        case todoConstants.GET_LIST:
            return {

                itemList: action.itemList
            };
        case todoConstants.CREATE_TODO:
            return {
                response: action.todo
            };
        case todoConstants.EDIT_TODO:
            return {
                response: action.response
            };
        case todoConstants.REMOVE_TODO:
            return {
                itemList: state.itemList.filter(item => item._id !== action.todoId),
                successRemove: true,
            };
        case todoConstants.RECOVER_TODO:

            return{
                todoItemThing: action.todoThing
            };
        case todoConstants.TODO_FAILURE:
        return{
            response: action.error
        };
        case todoConstants.FINISHED_TODO:
        return {
            itemList: state.itemList.map(item => {
                if (item.id === action.todoThing) {
                    item.status = 'pending';
                }
                return item;
            }),
        };
        case todoConstants.FINISH_TODO_EDITION:
            return {
                itemList: state.itemList.map(item => {
                    if (item.id === action.todoThing) {
                        item.status = 'pending';
                    }
                    return item;
                }),
            };

        default:
            return state
    }
}