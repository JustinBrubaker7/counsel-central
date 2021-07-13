import React, { useState } from "react";
import "./App.css";
import "./index.css";
import AppNav from "./components/AppNav";

import { BrowserRouter as Router } from "react-router-dom";
import ExternalRoute from "./components/ExternalRoute/ExternalRoute";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Router>
        {!loggedIn ? <ExternalRoute></ExternalRoute> : <AppNav />}
      </Router>
    </>
  );
}

export default App;
