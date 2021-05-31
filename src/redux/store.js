import { createStore } from 'redux';
// import { userActionTypes } from './user.types';

const INITIAL_STATE = {
    lang: "EN"
}

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_LANGUAGE":
            return {
                ...state,
                lang: action.payload,
            }
        default:
            return state;
    }

}



export const store = createStore(rootReducer);

