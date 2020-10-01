import React from 'react'
import classes from './MyPosts.module.css'
import Post from '../Post/Post'

const MyPosts = () => {
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
                <Post message="it's my first post" likes="like" likesCounter="111" />
                <Post message="it's my second post" likes="like" likesCounter="58" />
            </div>


        </div >


    )
}

export default MyPosts