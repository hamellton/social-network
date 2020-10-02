import React from 'react'
import classes from './MyPosts.module.css'
import Post from '../Post/Post'

const MyPosts = () => {
    let postsData = [
        { id: 1, message: 'it\'s my first post', likesCounter: 64 },
        { id: 2, message: 'it\'s my second post', likesCounter: 58 }
    ]
    let postsElements = postsData.map(posts => (<Post message={posts.message} likes="like" likesCounter={posts.likesCounter} />))
    return (
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>add post</button>
                <button>delete post</button>
            </div>

            <div className={classes.posts}>
                {postsElements}
            </div>


        </div >


    )
}

export default MyPosts