import { applyMiddleware, combineReducers, createStore } from 'redux';
import dialogsReducer from './reducers/dialogsReducer';
import profileReducer from './reducers/profileReducer';
import usersReducer from './reducers/usersReducer';
import authReducer from './reducers/authReducer';
import appReducer from './reducers/appReducer';
import { reducer as formReducer } from 'redux-form'
import thunkMW from 'redux-thunk';

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    authReducer,
    form: formReducer,
    app: appReducer
})

const store = createStore(reducers, applyMiddleware(thunkMW));

window.store = store;
export default store;