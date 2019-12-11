import { userConstants } from '../Constants';
const initialState = { loading: false };

export function users(state = initialState, action) {
    switch (action.type) {
        case userConstants.GET_ALL_REQUEST:
            return {
                loading: true
            };
        case userConstants.GET_ALL_SUCCESS:
            return {
                userCount: action.userCount,
            };
        case userConstants.GET_ALL_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}