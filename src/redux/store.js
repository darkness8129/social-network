import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import dialogsReducer from './reducers/dialogsReducer';
import profileReducer from './reducers/profileReducer';
import usersReducer from './reducers/usersReducer';
import authReducer from './reducers/authReducer';
import appReducer from './reducers/appReducer';
import { reducer as formReducer } from 'redux-form'
import thunkMW from 'redux-thunk';

// all reducers
const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    authReducer,
    // reducer for redux form
    form: formReducer,
    app: appReducer
})

// with redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMW)));

// without redux-devtools
//const store = createStore(reducers, applyMiddleware(thunkMW));

// for tests
window.store = store;

export default store;