import { ADD_POST, FETCH_POST } from "./types"

const initialState = {
    posts: [],
    fetchedPosts: [],
}

const PostReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return { ...state, posts:[...state.posts , action.payload] }
        case FETCH_POST:
            return {...state, fetchedPosts: action.payload}
        default: return state
    }
}

export default PostReducer