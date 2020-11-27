const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const DELETE_POST = 'DELETE-POST'

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state._idPosts.id++,
                message: state.newPostText,
                likesCounter: 0
            }
            if (state.newPostText.length === 0) {
                alert('please, enter a text post!!')
            } else {
                state.posts.push(newPost)
                state.newPostText = ''
            }
            return state
            // break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            // break
            return state
        case DELETE_POST:
            state.posts.pop()
            // break
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const deltePostElementActionCreator = () => ({type: DELETE_POST})

export default profileReducer