const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    messagesData : [
        { id: 1, message: 'Yo' },
        { id: 2, message: 'When start new webinar?' },
        { id: 3, message: 'How your new pages on React?' },
        { id: 4, message: 'New message from Viktor' }
    ],
    _idMessage: {
        id: 5,
    },
    newMessageText: '',
    dialogsData : [
        { id: 1, name: 'Kostya' },
        { id: 2, name: 'Vladilen' },
        { id: 3, name: 'Masha' },
        { id: 4, name: 'Viktor' }
    ]
}

const dialogsReduscer = (state = initialState, action) => {
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