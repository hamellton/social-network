import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './Redux/reduxStore'
import {BrowserRouter} from 'react-router-dom'
import StoreContext, {Provider} from "./StoreContext";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider
                store={store}>
                <App />
            </Provider>
        </BrowserRouter>
        ,
        document.getElementById('root')
    )
    ;
}
rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})
