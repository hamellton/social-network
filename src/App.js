import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Dialogs from './components/Dialogs/Dialogs'
import Music from './components/Music/Music'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'

const App = (props) => {
// let renderProfile = (props) => <Profile posts={props.posts} />
// let renderDialogs = () => <Dialogs />
let renderNews = () => <News />
let renderMusic = () => <Music />
let renderSettings = () => <Settings />
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div class='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile posts={props.posts} />} />
                    <Route path='/dialogs' render={() => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} />} />
                    <Route path='/news' render={() => <News />} />
                    <Route path='/music' render={() => <Music />} />
                    <Route path='/settings' render={() => <Settings />} />
                    {/* <Route path='/profile' component={renderProfile} /> */}
                    {/* <Route path='/dialogs' component={renderDialogs} /> */}
                    <Route path='/news' component={renderNews} />
                    <Route path='/music' component={renderMusic} />
                    <Route path='/settings' component={renderSettings} />
                </div>


            </div>
        </BrowserRouter>
    );
}

export default App