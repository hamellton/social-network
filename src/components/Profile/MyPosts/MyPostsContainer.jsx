import React from 'react'
import {
    addPostActionCreator,
    deltePostElementActionCreator,
    updateNewPostTextActionCreator
} from '../../../Redux/profileReducer'
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()

                    let addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }
                    let onPostChanged = (text) => {
                        let action = updateNewPostTextActionCreator(text)
                        store.dispatch(action)
                    }
                    let deletePostElement = () => {
                        let action = deltePostElementActionCreator()
                        store.dispatch(action)
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
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer