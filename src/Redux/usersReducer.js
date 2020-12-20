const SET_USERS = 'SET-USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

let initialState = {
    users : [
        { id: 1, photoUrl: 'https://bestbonusmoney.com/wp-content/themes/bestbonus_light/incognito.jpg', followed: false, fullname: 'Kostya', status: 'Status1', location: {city: 'kyiv', country: 'Ukraine'} },
        { id: 2, photoUrl: 'https://bestbonusmoney.com/wp-content/themes/bestbonus_light/incognito.jpg', followed: true, fullname: 'Jenni', status: 'Status2', location: {city: 'London', country: 'England'} },
        { id: 3, photoUrl: 'https://bestbonusmoney.com/wp-content/themes/bestbonus_light/incognito.jpg', followed: true, fullname: 'Sam', status: 'Status3', location: {city: 'Paris', country: 'France'} },
      ],
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