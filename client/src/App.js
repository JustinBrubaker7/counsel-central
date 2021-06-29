import React, { useState } from 'react';
import './App.css';
import './index.css';
import AppNav from './components/AppNav'
import ExternalNav from './components/ExternalNav'
import HomeExternal from './pages/HomeExternal';
import LoginForm from './components/LoginForm/LoginForm';
import Pricing from './components/Pricing/Pricing';
import RegisterForm from './components/RegisterForm/RegisterForm';
import FeatureSectionExternal from './components/FeatureSectionExternal/index';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";





function App() {

  const [loggedIn, setLoggedIn] = useState(true)

  return (
    <>
    <Router>
    <Switch>
      <Route exact path="/">
        {!loggedIn ? <HomeExternal /> : <AppNav />}
      </Route>
      <Route exact path="/login">
        <ExternalNav />
        <LoginForm />
      </Route>
      <Route exact path="/pricing" >
        <ExternalNav />
        <Pricing />
      </Route>
      <Route exact path="/features" >
        <ExternalNav />
        <FeatureSectionExternal />
      </Route>
      <Route exact path="/contact" >
        <ExternalNav />
        <h1> COntact </h1>
      </Route>
      <Route exact path="/register" >
        <ExternalNav />
        <RegisterForm />
      </Route>
      </Switch>   
    </Router>
    </>  
  );
}


export default App;
