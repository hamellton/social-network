import React from 'react'
import classes from './Sidebar.module.css'

const Sidebar = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.content}><center><span>{props.name}</span></center></div>
        </div>
    )
}

export default Sidebar