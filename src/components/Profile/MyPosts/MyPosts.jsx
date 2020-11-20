import React from 'react'
import Post from '../Post/Post'
import classes from './MyPosts.module.css'

const MyPosts = (props) => {
    let postsElements = props.posts.profilePage.posts.map(posts => (<Post message={posts.message} likes="like" likesCounter={posts.likesCounter} />))

    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost()
        props.updateNewPostText('')
        newPostElement.current.value = ''
    }
    let onPostChanged = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
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