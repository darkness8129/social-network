import { combineReducers, createStore } from 'redux';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducers';
import authReducer from './authReducer';

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    authReducer
})

const store = createStore(reducers);

export default store;