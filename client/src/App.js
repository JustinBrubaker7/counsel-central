import React, { useState } from 'react';
import './App.css';
import './index.css';
import AppNav from './components/AppNav'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ExternalRoute from './components/ExternalRoute/ExternalRoute';




function App() {

  const [loggedIn, setLoggedIn] = useState(true)

  return (
    <>
    <Router>

      {!loggedIn ? <ExternalRoute></ExternalRoute> : <AppNav />}

    </Router>
    </>  
  );
}


export default App;
