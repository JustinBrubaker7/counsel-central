import React, { useState } from 'react';
import './App.css';
import './index.css';
import AppNav from './components/AppNav'
import ExternalNav from './components/ExternalNav'
import HomeExternal from './pages/HomeExternal';
import LoginForm from './components/LoginForm/LoginForm';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";





function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <>
    <Router>
    <Route exact path="/">
    {!loggedIn ? <HomeExternal /> : <AppNav />}
    </Route>

    
    <Route exact path="/login">
     <ExternalNav />
     <LoginForm />
    </Route>
    
    </Router>
    </>  
  );
}


export default App;
