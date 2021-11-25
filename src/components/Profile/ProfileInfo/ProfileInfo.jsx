import React , {useState} from 'react'
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    const [state, setstate] = useState('ava + description')
    const testFunction = () => {
        setstate('new satte string for button');
    }
    return (
        <div>
            <div className={classes.profileInfoImg}>
                <img src="https://s3.tproger.ru/uploads/2019/01/react-girl-770x270.jpg" alt="" /> </div>
            <div className={classes.desriptionBlock}>
                { state }
                <button onClick={testFunction}>Onclick</button>
        </div>
        </div>

    )
}

export default ProfileInfo