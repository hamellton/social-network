const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const dialogsReduscer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: state._idMessage.id++,
                message: state.newMessageText,
            }
            if (state.newMessageText.length === 0) {
                alert('please, enter a message!!')
            } else {
                state.messagesData.push(newMessage)
                state.newMessageText = ''
            }
            // break
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            // break
            return state
        default:
            return state
    }
}


export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReduscer