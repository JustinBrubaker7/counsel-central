import React, { useState } from 'react';
import './App.css';
import './index.css';
import AppNav from './components/AppNav'
import ExternalNav from './components/ExternalNav'





function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <>

    {!loggedIn ? <ExternalNav /> : <AppNav />}
    
    </>  
  );
}


export default App;
