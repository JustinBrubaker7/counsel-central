import React, { useState } from 'react';
import './App.css';
import './index.css';
import AppNav from './components/AppNav'
import ExternalNav from './components/ExternalNav'
import HomeExternal from './pages/HomeExternal';





function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <>

    {!loggedIn ? <HomeExternal /> : <AppNav />}
    
    
    </>  
  );
}


export default App;
