import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';

const App = () => {
    return (
        <div className="app">
            <HeaderContainer />
            <Navbar />

            <div className="content">
                <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                <Route exact path='/dialogs' render={() => <DialogsContainer />} />
                <Route path='/news' component={News} />
                <Route path='/music' component={Music} />
                <Route path='/settings' component={Settings} />
                <Route path='/users' component={UsersContainer} />
            </div>
        </div>
    );
}

export default App;
