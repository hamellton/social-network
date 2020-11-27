import React from 'react'
import { addPostActionCreator, deltePostElementActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profileReducer'
import Post from '../Post/Post'
import classes from './MyPosts.module.css'

const MyPosts = (props) => {
    let postsElements = props.posts.profilePage.posts.map(posts => (<Post message={posts.message} likes="like" likesCounter={posts.likesCounter} />))

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
        newPostElement.current.value = ''
    }
    let onPostChanged = () => {
        let text = newPostElement.current.value
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }
    let deletePostElement = () => {
        let action = deltePostElementActionCreator()
        props.dispatch(action)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <center><textarea onChange={onPostChanged} ref={newPostElement} placeholder='enter your post' /></center>
            </div>
            <div>
                <center>
                    <button className={classes.btn} onClick={addPost}>add post</button>
                    <button className={classes.btn} onClick={deletePostElement}>delete last post</button>
                </center>
            </div>

            <div className={classes.posts}>
                {postsElements}
            </div>


        </div >


    )
}

export default MyPosts