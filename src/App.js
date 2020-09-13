import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, BrowserRouter } from 'react-router-dom';

const App = ({ dialogs, messages, posts }) => {
    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <Navbar />
                <div className="content">
                    <Route path='/profile' render={() => <Profile posts={posts} />} />
                    <Route exact path='/dialogs' component={() => <Dialogs dialogs={dialogs} messages={messages} />} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
