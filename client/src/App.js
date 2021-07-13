import React, { useContext } from 'react';
import './App.css';
import './index.css';
import AppNav from './components/AppNav'
import { BrowserRouter as Router } from "react-router-dom";
import ExternalRoute from './components/ExternalRoute/ExternalRoute';
import AuthContext from './context/auth-context';




function App() {

  const authCtx = useContext(AuthContext)

  const loggedIn = authCtx.isLoggedIn

  return (
    <>
      <Router >

        {!loggedIn ? <ExternalRoute></ExternalRoute> : <AppNav />}


      </Router>
    </>
  );
}


export default App;
