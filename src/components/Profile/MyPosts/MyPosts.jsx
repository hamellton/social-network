import React from 'react'
import Post from '../Post/Post'
import classes from './MyPosts.module.css'

const MyPosts = (props) => {
    let postsElements = props.posts.profilePage.posts.map(posts => (<Post message={posts.message} likes="like" likesCounter={posts.likesCounter} />))

    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = ''
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <center><textarea ref={newPostElement}></textarea></center>
            </div>
            <div>
                <center>
                    <button onClick={addPost}>add post</button>
                    <button>delete post</button>
                </center>
            </div>

            <div className={classes.posts}>
                {postsElements}
            </div>


        </div >


    )
}

export default MyPosts