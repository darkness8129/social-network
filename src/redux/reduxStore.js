import { applyMiddleware, combineReducers, createStore } from 'redux';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMW from 'redux-thunk';

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    authReducer
})

const store = createStore(reducers, applyMiddleware(thunkMW));

export default store;