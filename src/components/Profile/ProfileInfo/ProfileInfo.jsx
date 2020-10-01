import React from 'react'
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.profileInfoImg}>
                <img src="https://s3.tproger.ru/uploads/2019/01/react-girl-770x270.jpg" /> </div>
            <div className={classes.desriptionBlock}>
                ava + description
        </div>
        </div>

    )
}

export default ProfileInfo