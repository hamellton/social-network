import React from 'react'
import classes from './MyPosts.module.css'
import Post from '../Post/Post'

const MyPosts = () => {
    let postsData = [
        { id: 1, message: 'it\'s my first post', likesCounter: 64 },
        { id: 2, message: 'it\'s my second post', likesCounter: 58 }
    ]
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
                <Post message={postsData[0].message} likes="like" likesCounter={postsData[0].likesCounter} />
                <Post message={postsData[1].message} likes="like" likesCounter={postsData[1].likesCounter} />
            </div>


        </div >


    )
}

export default MyPosts