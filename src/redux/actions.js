import ActionTypes from './types';

export const setLanguage = (lang) => ({
    type: ActionTypes.SET_LANG,
    payload: lang
})
export const openToast = ({ isErrorMessage, toastMessage }) => ({
    type: ActionTypes.OPEN_TOAST,
    payload: { isErrorMessage, toastMessage }
})
export const closeToast = () => ({
    type: ActionTypes.CLOSE_TOAST,
})

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment,
})
export const setSubject = (subject) => ({
    type: ActionTypes.SET_SUBJECT,
    payload: subject,
})

export const openToastNotify = ({ isErrorMessage, toastMessage }) => {
    return dispatch => {
        dispatch(openToast({ isErrorMessage, toastMessage }));
        setTimeout(() =>
            dispatch(closeToast()), 3000)
    };
};