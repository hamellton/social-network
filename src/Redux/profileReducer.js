const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const DELETE_POST = 'DELETE-POST'

let initialState = {
    posts : [
        { id: 1, message: 'it\'s my first post', likesCounter: 64 },
        { id: 2, message: 'it\'s my second post', likesCounter: 58 }
      ],
      _idPosts: {
        id: 3,
    },
      newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state._idPosts.id++,
                message: state.newPostText,
                likesCounter: 0
            }
            let copyState = {...state}
            copyState.newPostText = {...state.newPostText}
            if (copyState.newPostText.length === 0) {
                alert('please, enter a text post!!')
            } else {
                copyState.posts = [...state.posts]
                copyState.posts.push(newPost)
                copyState.newPostText = ''
            }
            return copyState
            // break;
             }
        case UPDATE_NEW_POST_TEXT: {
            let copyState = {...state}
            copyState.newPostText = {...state.newPostText}
            copyState.newPostText = action.newText
            // break
            return copyState
        }
        case DELETE_POST: {
            let copyState = {...state}
            copyState.posts = [...state.posts]
            copyState.posts.pop()
            // break
            return copyState
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const deletePostElementActionCreator = () => ({type: DELETE_POST})

export default profileReducer