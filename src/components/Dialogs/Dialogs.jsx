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
    
    let dialogsElements = dialogsData.map(dialog => (<DialogsItem id={dialog.id} name={dialog.name} />))
    let messagesElement = messagesData.map(message => (<Message message={message.message} id={message.id} />))

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {
                    dialogsElements
                }
            </div>
            <div className={classes.messages}>
                {
                    messagesElement
                }
            </div>
        </div>
    )
}

export default Dialogs