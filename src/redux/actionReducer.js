import { HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER, SHOW_WARNING } from "./types"

const initialState = {
    loaderCheck: false,
    alertCheck: null,
    warning: false
}

const actionReducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_LOADER:
            return {...state, loaderCheck: true}
        case HIDE_LOADER:
            return {...state, loaderCheck: false}
        case SHOW_ALERT:
            return {...state, alertCheck: action.payload}
        case HIDE_ALERT:
            return {...state, alertCheck: null}
        case SHOW_WARNING:
            return {...state, warning: true}
        default: return state
    }
}

export default actionReducer