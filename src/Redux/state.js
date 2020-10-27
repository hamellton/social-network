import { rerenderEntireTree } from "../render"

let state = {
    profilePage: {
        posts : [
            { id: 1, message: 'it\'s my first post', likesCounter: 64 },
            { id: 2, message: 'it\'s my second post', likesCounter: 58 }
          ]
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
            {id:3, name: 'Karina'}
        ]
    }
}

export let addPost = (postsMessage) => {
        let newPost = {
        id: 3,
        message: postsMessage,
        likesCounter: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export let deletePost = (postDelete) => {
    state.dialogsPage.messagesData.pop(postDelete)
    rerenderEntireTree(state)
}

export default state

