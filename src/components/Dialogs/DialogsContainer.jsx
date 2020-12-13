import React from 'react'
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../Redux/dialogsReducer'
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogsPage

                let addMessage = () => {
                    store.dispatch(sendMessageActionCreator())
                }
                let onMessageChanged = (text) => {
                    let action = updateNewMessageTextActionCreator(text)
                    store.dispatch(action)
                }
                return (
                    <Dialogs dialogsData={state.dialogsData}
                             messagesData={state.messagesData}
                             addMessage={addMessage}
                             onMessageChanged={onMessageChanged}/>
                )
            }}
        </StoreContext.Consumer>
    )
}

export default DialogsContainer