import React from 'react'
import classes from './MyPosts.module.css'
import Post from '../Post/Post'

const MyPosts = () => {
    return (

        <div>
            <textarea></textarea>
            <button>add post</button>
            <button>delete post</button>

            <Post message="it's my first post" like="like" likeCounter="111"/>
            <Post message="it's my second post" like="like" likeCounter="58"/>

        </div >


    )
}

export default MyPosts