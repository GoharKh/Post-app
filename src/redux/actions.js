import { ADD_POST,  HIDE_ALERT, HIDE_LOADER, REQUEST_POST, SHOW_ALERT, SHOW_LOADER, SHOW_WARNING } from "./types"

export const showAlert = (alertInput) => {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: alertInput
        });

        setTimeout(() => {
            dispatch(hideAlert())
        }, 2000)
    }
}
export const hideAlert = () =>{
    return {
        type: HIDE_ALERT
    }
}
export const addPost = (post) => {
    if(!post.length) {
        showAlert('Input cant be empty. Please add post')
    }
    return {
        type: ADD_POST,
        payload: post
    }
}

export const showLoader = () => {
    return {
        type: SHOW_LOADER
    }
}
export const hideLoader = () => {
    return {
        type: HIDE_LOADER
    }
}
export const showWarning = () => {
    return {
        type: SHOW_WARNING
    }
}

export const  fetchPost = () => {
    return {
        type: REQUEST_POST
    }
}

