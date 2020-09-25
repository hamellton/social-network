import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
    return (

        <div className={classes.item}>
            <img src="https://bestbonusmoney.com/wp-content/themes/bestbonus_light/incognito.jpg" />
            {props.message}
                <div>
                <span>{props.like} : {props.likeCounter}</span>
            </div>
        </div>
    )
}

export default Post