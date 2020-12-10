import React from 'react'
import { addPostActionCreator, deltePostElementActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profileReducer'
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    let onPostChanged = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }
    let deletePostElement = () => {
        let action = deltePostElementActionCreator()
        props.store.dispatch(action)
    }

    return(
        <MyPosts updateNewPostText={onPostChanged}
                 deletePostElement={deletePostElement}
                 addPost={addPost}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}
        />
        )
}

export default MyPostsContainer