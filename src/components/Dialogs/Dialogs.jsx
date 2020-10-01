import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Dialogs.module.css'

const DialogsItem = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={classes.activeLink}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogsItem name="Kostya" id="1" />
                <DialogsItem name="Vladilen" id="2" />
                <DialogsItem name="Masha" id="3" />
                <DialogsItem name="Viktor" id="4" />
            </div>
            <div className={classes.messages}>
                <Message message="Yo" />
                <Message message="When start new webinar?" />
                <Message message="How your new pages on React?" />
                <Message message="New message from Viktor" />
            </div>
        </div>
    )
}

export default Dialogs