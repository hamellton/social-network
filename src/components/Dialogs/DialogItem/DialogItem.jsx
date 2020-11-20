import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './DialogItem.module.css'

const DialogItem = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <div className={classes.dialogsBlocks}>
                <div className={classes.imgProfile}>
                    <img src="https://bestbonusmoney.com/wp-content/themes/bestbonus_light/incognito.jpg" alt="" />
                </div>
                <div className={classes.dialogName}>
                <NavLink to={"/dialogs/" + props.id}
                    activeClassName={classes.activeLink}>{props.name}</NavLink>
                    </div>
            </div>
        </div>
    )
}

export default DialogItem