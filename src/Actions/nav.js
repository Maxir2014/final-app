import {navConstants} from "../Constants";

export const navActions = {
    openMenu,
    closeMenu
};

function openMenu(action){
    return { type: navConstants.OPEN_SIDE_MENU, action }
}
function closeMenu(action){
    return { type: navConstants.CLOSE_SIDE_MENU, action}
}

