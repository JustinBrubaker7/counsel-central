import React from 'react';
import Dashboard from '../../pages/Dashboard';
import Caseload from '../../pages/Caseload';
import Poplog from '../../pages/Poplog';
import Calendar from '../../pages/Calendar';
import Settings from '../../pages/Settings';
import AddCouselorForm from '../../pages/AddCouselorForm'
import AddStudentForm from '../../pages/AddStudentForm';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";





function ExternalRoute() {
  return (
    <>
    <Switch>
        <Route exact path="/">
            <Dashboard />
        </Route>
        <Route exact path="/caseload">
            <Caseload />
        </Route>
        <Route exact path="/Poplog">
            <Poplog />
        </Route>
        <Route exact path="/calendar">
            <Calendar />
        </Route>
        <Route exact path="/settings">
            <Settings />
        </Route>
        <Route exact path="/counselor">
            <AddCouselorForm />
        </Route>
        <Route exact path="/student">
            <AddStudentForm />
        </Route>
    </Switch>

    </>  
  );
}


export default ExternalRoute;
