import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import state, { addPost, deletePost, subscribe } from './Redux/state'
import { BrowserRouter } from 'react-router-dom'

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} deletePost={deletePost} />
      </BrowserRouter>
    ,
    document.getElementById('root')
  );
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)
