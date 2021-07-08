import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import userAuthProvider from './context/user-context'


ReactDOM.render(
    // <userAuthProvider value={}>
        <App />
    // </userAuthProvider>
, document.getElementById('root')
);
