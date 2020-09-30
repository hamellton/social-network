import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to="/dialogs/1">Kostya</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/2">Vladilen</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/3">Masha</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/4">Viktor</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Yo</div>
                <div className={classes.message}>When start new webinar?</div>
                <div className={classes.message}>How your new pages on React?</div>
            </div>
        </div>
    )
}

export default Dialogs