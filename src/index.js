import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

let posts = [
  { id: 1, message: 'it\'s my first post', likesCounter: 64 },
  { id: 2, message: 'it\'s my second post', likesCounter: 58 }
]

    let dialogsData = [
        { id: 1, name: 'Kostya' },
        { id: 2, name: 'Vladilen' },
        { id: 3, name: 'Masha' },
        { id: 4, name: 'Viktor' }
    ]
    let messagesData = [
        { id: 1, message: 'Yo' },
        { id: 2, message: 'When start new webinar?' },
        { id: 3, message: 'How your new pages on React?' },
        { id: 4, message: 'New message from Viktor' }
    ]

ReactDOM.render(
  <div>
    <App posts={posts} dialogsData={dialogsData} messagesData={messagesData} />
  </div>
  ,
  document.getElementById('root')
);

serviceWorker.unregister()
