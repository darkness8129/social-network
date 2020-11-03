import React, { useEffect, Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import './App.css';
import { initialize } from './redux/reducers/appReducer';

import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginContainer from './components/Login/LoginContainer';
import Preloader from './components/common/Preloader/Preloader';
import withSuspense from './hoc/withSuspense';

const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));

const App = (props) => {

    useEffect(() => {
        props.initialize();
    }, []);


    if (!props.initialized) {
        return <Preloader />
    } else {
        return (
            <div className="app" >
                <HeaderContainer />
                <Navbar />

                <div className="content">
                    <Switch>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                        <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
                        <Route path='/news' render={withSuspense(News)} />
                        <Route path='/music' render={withSuspense(Music)} />
                        <Route path='/settings' render={withSuspense(Settings)} />
                        <Route path='/users' render={withSuspense(UsersContainer)} />
                        <Route path='/login' component={LoginContainer} />
                        <Redirect exact from='/' to='/profile' />
                    </Switch>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(withRouter,
    connect(mapStateToProps, { initialize }))(App);
