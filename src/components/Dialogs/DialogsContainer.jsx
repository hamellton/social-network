import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../Redux/dialogsReducer'
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState().dialogsPage
//
//                 let addMessage = () => {
//                     store.dispatch(sendMessageActionCreator())
//                 }
//                 let onMessageChanged = (text) => {
//                     let action = updateNewMessageTextActionCreator(text)
//                     store.dispatch(action)
//                 }
//                 return (
//                     <Dialogs dialogsData={state.dialogsData}
//                              messagesData={state.messagesData}
//                              addMessage={addMessage}
//                              onMessageChanged={onMessageChanged}/>
//                 )
//             }}
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            let action = sendMessageActionCreator()
            dispatch(action)
        },
        onMessageChanged: (text) => {
            let action = updateNewMessageTextActionCreator(text)
            dispatch(action)
        }
    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer