import { showAlert } from "./actions"
import { ADD_POST } from "./types"

const data = ['nikol', 'muk']

// export function spamWordsMiddleware({ dispatch }) {
//     return function (next) {
//         return function (action) {
//             if(action.type === ADD_POST) {
//                 const result = data.filter(a => action.payload.title === a)
//                 if(result.length) return dispatch(showAlert('change input'))
//             } 
//             return next(action)
//         }
//     }
// }

export const spamWordsMiddleware = ({dispatch}) => next => action => {
    if(action.type === ADD_POST) {
                const result = data.filter(a => action.payload.title === a)
                if(result.length) return dispatch(showAlert('change input'))
    }
    return next(action)
}