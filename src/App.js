import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, Switch, withRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import LoginContainer from './components/Login/LoginContainer';
import { initialize } from './redux/appReducer';
import Preloader from './components/Preloader/Preloader';
import { connect } from 'react-redux';
import { compose } from 'redux';

class App extends React.Component {
    componentDidMount() {
        debugger
        this.props.initialize();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />
        } else {
            return (
                <div className="app" >
                    <HeaderContainer />
                    <Navbar />

                    <div className="content">
                        <Switch>
                            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                            <Route exact path='/dialogs' render={() => <DialogsContainer />} />
                            <Route path='/news' component={News} />
                            <Route path='/music' component={Music} />
                            <Route path='/settings' component={Settings} />
                            <Route path='/users' component={UsersContainer} />
                            <Route path='/login' component={LoginContainer} />
                        </Switch>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(withRouter,
    connect(mapStateToProps, { initialize }))(App);
