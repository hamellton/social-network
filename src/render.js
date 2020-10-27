import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { addPost, deletePost } from './Redux/state'
import { BrowserRouter } from 'react-router-dom'


export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} deletePost={deletePost} />
      </BrowserRouter>
    ,
    document.getElementById('root')
  );
}
