import React from 'react'
import Post from '../Post/Post'
import classes from './MyPosts.module.css'

const MyPosts = (props) => {
    let postsElements = props.posts.profilePage.posts.map(posts => (<Post message={posts.message} likes="like" likesCounter={posts.likesCounter} />))

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'})
        newPostElement.current.value = ''
    }
    let onPostChanged = () => {
        let text = newPostElement.current.value
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT'})
    }
    let deletePostElement = () => {
        props.deletePost()
    }
    let deletePostElement = () => {
        props.deletePost()
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <center><textarea onChange={onPostChanged} ref={newPostElement} /></center>
            </div>
            <div>
                <center>
                    <button onClick={addPost}>add post</button>
                    <button onClick={deletePostElement}>delete last post</button>
                </center>
            </div>

            <div className={classes.posts}>
                {postsElements}
            </div>


        </div >


    )
}

export default MyPosts