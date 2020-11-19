
// import { v4 as uuidv4 } from 'uuid';  // for autogeneration id
let store = {
    _idPosts: {
        id: 3,
    },
    _state: {
        profilePage: {
            posts : [
                { id: 1, message: 'it\'s my first post', likesCounter: 64 },
                { id: 2, message: 'it\'s my second post', likesCounter: 58 }
              ],
              newPostText: 'SPA Ract - Redux'
        },
        dialogsPage : {
            messagesData : [
                { id: 1, message: 'Yo' },
                { id: 2, message: 'When start new webinar?' },
                { id: 3, message: 'How your new pages on React?' },
                { id: 4, message: 'New message from Viktor' }
            ],
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
        this._callSubscriber = observer //observer слушатель, паттерн
    },


    addPost(postsMessage) {
            let newPost = {
            id: this._idPosts.id++,
            message: postsMessage,
            likesCounter: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        // console.log(this._state.profilePage.posts)
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    deletePost() {
        this._state.profilePage.posts.pop()
        this._callSubscriber(this._state)
    },
    dispath(action) { // {type: 'ADD-POST'}
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: this._idPosts.id++,
                message: this.postsMessage,
                likesCounter: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'APDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = this.newText
            this._callSubscriber(this._state)
        }
    }
}

window.store = store

export default store
// STORE = OOP!!!

