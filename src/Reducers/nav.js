import {navConstants} from "../Constants";


export function navHandler(state = {sideClass: 'side-drawer', isActiveMenu:false}, action) {
    switch (action.type) {
        case navConstants.OPEN_SIDE_MENU:
            return {
               sideClass: 'side-drawer open',
                isActiveMenu: true,
            };
        case navConstants.CLOSE_SIDE_MENU:
            return {
                sideClass: 'side-drawer',
                isActiveMenu: false,

            };
        default:
            return state
    }
}