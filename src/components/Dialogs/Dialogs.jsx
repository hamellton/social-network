import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import classes from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map(dialog => (<DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />))
    let messagesElement = props.messagesData.map(message => (<Message key={message.id} message={message.message} id={message.id} />))

    let messageElements = React.createRef()

    let addMessage = () => {
        props.addMessage()
    }
    let onMessageChanged = () => {
        let text = messageElements.current.value
        props.onMessageChanged(text)
    }

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
                <div className={classes.correspondence}>
                    <center>
                    <div>
                        <textarea ref={messageElements} onChange={onMessageChanged} placeholder='enter your message'></textarea>
                    </div>
                    <div>
                        <button onClick={addMessage}>send message</button>
                    </div>
                    </center>

                </div>
            </div>
        </div>
    )
}

export default Dialogs