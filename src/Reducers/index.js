import { combineReducers } from 'redux';
import { alert } from './alert';
import { authentication } from './authentication';
import { registration } from './register';
import {users} from "./user";
import { navHandler } from "./nav";

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    alert,
    navHandler,
});

export default rootReducer;