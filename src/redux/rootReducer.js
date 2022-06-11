import { combineReducers } from "redux"
import actionReducer from "./actionReducer"
import PostReducer from "./postReducer"

export const rootReducer = combineReducers({
    posts: PostReducer,
    load: actionReducer
})