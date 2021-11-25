const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let INITIAL_STATE = {
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
        { id: 1, name: 'user1' },
        { id: 2, name: 'user2' },
        { id: 3, name: 'user3' },
        { id: 4, name: 'user4' }
    ]
}

const dialogsReduscer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: state._idMessage.id++,
                message: state.newMessageText,
            }
            let copyState = {...state}
            copyState.newMessageText = {...state.newMessageText}
            if (state.newMessageText.length === 0) {
                alert('please, enter a message!!')
            } else {
                copyState.messagesData = [...state.messagesData]
                copyState.messagesData.push(newMessage)
                copyState.newMessageText = ''
            }
            // break
            return copyState
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let copyState = {...state}
            copyState.newMessageText = {...state.newMessageText}
            copyState.newMessageText = action.newText
            // break
            return copyState
        }
        default:
            return state
    }
}


export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReduscer