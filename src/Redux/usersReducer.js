const SET_USERS = 'SET-USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

let initialState = {
    users : [],
      _idPosts: {
        id: 4,
    }
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            let copyState = {
                ...state,
                users: [...state.users, ...action.users]
            }
            return copyState
        }
        case FOLLOW: {
            let copyState = {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.userId) {
                        return {...el, followed: true}
                    }
                    return el
                })
            }
            return copyState
        }
        case UNFOLLOW: {
            let copyState = {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.userId) {
                        return {...el, followed: false}
                    }
                    return el
                })
            }
            return copyState
        }
        default:
            return state
    }
}

export const setUsersActionCreator = (users) => ({type: SET_USERS, users})
export const followActionCreator = (userId) => ({type: FOLLOW, userId})
export const unFollowActionCreator = (userId) => ({type: UNFOLLOW, userId})

export default usersReducer