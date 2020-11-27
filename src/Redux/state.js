// import { v4 as uuidv4 } from 'uuid';  // for autogeneration id
const ADD_POST = 'ADD-POST' 
const DELETE_POST = 'DELETE-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let store = {
    _idPosts: {
        id: 3,
    },
    _idMessage: {
        id: 5,
    },
    _state: {
        profilePage: {
            posts : [
                { id: 1, message: 'it\'s my first post', likesCounter: 64 },
                { id: 2, message: 'it\'s my second post', likesCounter: 58 }
              ],
              newPostText: ''
        },
        dialogsPage : {
            messagesData : [
                { id: 1, message: 'Yo' },
                { id: 2, message: 'When start new webinar?' },
                { id: 3, message: 'How your new pages on React?' },
                { id: 4, message: 'New message from Viktor' }
            ],
            newMessageText: '',
            dialogsData : [
                { id: 1, name: 'Kostya' },
                { id: 2, name: 'Vladilen' },
                { id: 3, name: 'Masha' },
                { id: 4, name: 'Viktor' }
            ]
        },
        sideBar : {
            sidebar : [
                {id: 1, name: 'Dasha'},
                {id: 2, name: 'Pasha'},
                {id: 3, name: 'Karina'}
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },


    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer //observer слушатель, наблюдатель, паттерн
    },
    dispatch(action) { // {type: 'ADD-POST'}
        if (action.type === ADD_POST) {
            let newPost = {
                id: this._idPosts.id++,
                message: this._state.profilePage.newPostText,
                likesCounter: 0
            }
            if (this._state.profilePage.newPostText.length === 0) {
                alert('please, enter a text post!!')
            } else {
                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.newPostText = ''
                this._callSubscriber(this._state)
            }
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === DELETE_POST) {
            this._state.profilePage.posts.pop()
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: this._idMessage.id++,
                message: this._state.dialogsPage.newMessageText,
            }
            if (this._state.dialogsPage.newMessageText.length === 0) {
                alert('please, enter a message!!')
            } else {
                this._state.dialogsPage.messagesData.push(newMessage)
                this._state.dialogsPage.newMessageText = ''
                this._callSubscriber(this._state)
            }
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const deltePostElementActionCreator = () => ({type: DELETE_POST})
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

window.store = store

export default store
// STORE = OOP!!!

