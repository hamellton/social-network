import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Dialogs from './components/Dialogs/Dialogs'
import Music from './components/Music/Music'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar state={props.state.sideBar} />
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile updateNewPostText={props.updateNewPostText} posts={props.state} addPost={props.addPost} deletePost={props.deletePost} />} />
                <Route path='/dialogs' render={() => <Dialogs dialogsData={props.state.dialogsPage.dialogsData}
                    messagesData={props.state.dialogsPage.messagesData} />} />
                <Route path='/news' render={() => <News />} />
                <Route path='/music' render={() => <Music />} />
                <Route path='/settings' render={() => <Settings />} />
            </div>

        </div>

    );
}

export default App