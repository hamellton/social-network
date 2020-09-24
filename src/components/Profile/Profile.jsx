import React from 'react'
import classes from './Profile.module.css'

 const Profile = () => {
     return(
        <div className={classes.content}> 
        <div>
        <img src="https://s3.tproger.ru/uploads/2019/01/react-girl-770x270.jpg" /> </div>
        <div>
        <div>
            ava + description
        </div>

            <div>My posts</div>
            
            <div>
                new post
            </div>
            <div className={classes.posts}>
            <div className={classes.item}>
                post 1
            </div>
            <div className={classes.item}>Post 2</div>
            </div>
        </div>
        </div>
        
        
 )
 }

 export default Profile