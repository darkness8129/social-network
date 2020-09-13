import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import './index.css';
let dialogs = [
    { name: 'Sasha', id: 1 },
    { name: 'Katya', id: 2 },
    { name: 'Oleg', id: 3 },
    { name: 'Anya', id: 4 },
    { name: 'Alina', id: 5 },
    { name: 'Lena', id: 6 },
    { name: 'Dima', id: 7 },
];

let messages = [
    { messageText: 'Hello', id: 1 },
    { messageText: 'Hi', id: 2 },
    { messageText: 'How are yo', id: 3 },
    { messageText: 'ok', id: 4 },
];
let posts = [
    { postText: 'Test post 1', id: 1 },
    { postText: 'Test post 2', id: 2 },
    { postText: 'Test post 3', id: 3 },
];
ReactDOM.render(
    <React.StrictMode>
        <App dialogs={dialogs} messages={messages} posts={posts} />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
