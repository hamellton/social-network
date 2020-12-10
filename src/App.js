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
            <Navbar state={props.state} />
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile store={props.store} posts={props.state} dispatch={props.dispatch} />} />
                <Route path='/dialogs' render={() => <Dialogs store={props.store}
                    dispatch={props.dispatch} />} />
                <Route path='/news' render={() => <News />} />
                <Route path='/music' render={() => <Music />} />
                <Route path='/settings' render={() => <Settings />} />
            </div>

        </div>

    );
}

export default App