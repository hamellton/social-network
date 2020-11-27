import dialogsReduscer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"
// import { v4 as uuidv4 } from 'uuid';  // for autogeneration id

let store = {
    _state: {
        profilePage: {
            posts : [
                { id: 1, message: 'it\'s my first post', likesCounter: 64 },
                { id: 2, message: 'it\'s my second post', likesCounter: 58 }
              ],
              _idPosts: {
                id: 3,
            },
              newPostText: ''
        },
        dialogsPage : {
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
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReduscer(this._state.dialogsPage, action)
        this._state.sideBar = sidebarReducer(this._state.sideBar, action)

        this._callSubscriber(this._state)
    }
}

window.store = store

export default store
