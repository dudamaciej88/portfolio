import {
    TOGGLE_THEME,
} from "../actions/types";

const INITIAL_STATE = {
    isDarkMode: true,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return {...state, isDarkMode: !state.isDarkMode}
    
    default:
        return state;

    }    }