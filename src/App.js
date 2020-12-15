import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Music from './components/Music/Music'
import News from './components/News/News'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersPage from "./components/Users/UsersPage";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header />
            <NavbarContainer />
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile store={props.store} posts={props.state} dispatch={props.dispatch} />} />
                <Route path='/dialogs' render={() => <DialogsContainer />} />
                <Route path='/news' render={() => <News />} />
                <Route path='/music' render={() => <Music />} />
                <Route path='/settings' render={() => <Settings />} />
                <Route path='/users' render={() => <UsersPage />} />
            </div>

        </div>

    );
}

export default App