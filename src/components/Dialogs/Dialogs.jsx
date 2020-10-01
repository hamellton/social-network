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
    let dialogsData = [
        { id: 1, name: 'Kostya' },
        { id: 2, name: 'Vladilen' },
        { id: 3, name: 'Masha' },
        { id: 4, name: 'Viktor' }
    ]
    let messagesData = [
        { id: 1, message: 'Yo' },
        { id: 2, message: 'When start new webinar?' },
        { id: 3, message: 'How your new pages on React?' },
        { id: 4, message: 'New message from Viktor' }
    ]
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogsItem name={dialogsData[3].name} id={dialogsData[3].id} />
            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
                <Message message={messagesData[3].message} />
            </div>
        </div>
    )
}

export default Dialogs