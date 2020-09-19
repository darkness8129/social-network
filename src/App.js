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
import { changePostText } from './redux/state';

const App = ({ state, dispatch }) => {
    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <Navbar />

                <div className="content">
                    <Route path='/profile' render={() => <Profile state={state.profilePage}
                        dispatch={dispatch} />} />
                    <Route exact path='/dialogs' render={() => <Dialogs state={state.dialogsPage} dispatch={dispatch} />} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
