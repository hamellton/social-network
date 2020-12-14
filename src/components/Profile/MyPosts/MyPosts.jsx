import React from 'react'
import Post from '../Post/Post'
import classes from './MyPosts.module.css'

const MyPosts = (props) => {
    let postsElements = props.posts.map(posts => (<Post key={posts.id} message={posts.message} likes="like" likesCounter={posts.likesCounter} />))

    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }
    let onPostChanged = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }
    let deletePost = () => {
        props.deletePostElement()
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <center><textarea value={props.newPostText} onChange={onPostChanged} ref={newPostElement} placeholder='enter your post' /></center>
            </div>
            <div>
                <center>
                    <button className={classes.btn} onClick={onAddPost}>add post</button>
                    <button className={classes.btn} onClick={deletePost}>delete last post</button>
                </center>
            </div>

            <div className={classes.posts}>
                {postsElements}
            </div>


        </div >


    )
}

export default MyPosts