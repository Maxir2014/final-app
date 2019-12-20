import { combineReducers } from 'redux';
import { alert } from './alert';
import { authentication } from './authentication';
import { thingsTodo } from './todo';
import {users} from "./user";
import { navHandler } from "./nav";

const rootReducer = combineReducers({
    authentication,
    thingsTodo,
    users,
    alert,
    navHandler,
});

export default rootReducer;