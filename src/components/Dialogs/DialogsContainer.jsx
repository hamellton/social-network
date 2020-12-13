import React from 'react'
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../Redux/dialogsReducer'
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage

    let addMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }
    let onMessageChanged = (text) => {
        let action = updateNewMessageTextActionCreator(text)
        props.dispatch(action)
    }

    return (
        <Dialogs dialogsData={state.dialogsData}
                 messagesData={state.messagesData}
        addMessage={addMessage}
        onMessageChanged={onMessageChanged}/>
    )
}

export default DialogsContainer