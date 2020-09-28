import React from 'react'
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://s3.tproger.ru/uploads/2019/01/react-girl-770x270.jpg" /> </div>
            <div>
                <div>
                    ava + description
        </div>
                <MyPosts />

            </div>
        </div>


    )
}

export default Profile