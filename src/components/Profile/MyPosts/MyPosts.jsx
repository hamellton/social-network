import React from 'react'
import classes from './MyPosts.module.css'
import Post from '../Post/Post'

const MyPosts = () => {
    return (

        <div>
            <textarea></textarea>
            <button>add post</button>
            <button>delete post</button>

            <Post message="it's my first post" likes="like" likesCounter="111" />
            <Post message="it's my second post" likes="like" likesCounter="58" />

        </div >


    )
}

export default MyPosts