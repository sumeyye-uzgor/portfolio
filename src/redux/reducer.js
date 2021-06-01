import ActionTypes from './types';

const INITIAL_STATE = {
    lang: "EN",
    isErrorMessage: null,
    toastMessage: "",
    isToast: false,
    comments: [],
};

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.SET_LANG:
            return {
                ...state,
                lang: action.payload,
            };
        case ActionTypes.OPEN_TOAST:
            return {
                ...state,
                isErrorMessage: action.payload.isErrorMessage,
                toastMessage: action.payload.toastMessage,
                isToast: true,

            };
        case ActionTypes.CLOSE_TOAST:
            return {
                ...state,
                isToast: false,
            }
        case ActionTypes.ADD_COMMENT:
            const oldComments = state.comments
            return {
                ...state,
                comments: [...oldComments, action.payload]
            }
        default:
            return state;
    }
};

export default rootReducer;





