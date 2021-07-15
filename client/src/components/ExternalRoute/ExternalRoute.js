import React from 'react';
import ExternalNav from '../../components/ExternalNav'
import HomeExternal from '../../pages/HomeExternal';
import LoginForm from '../../components/LoginForm/LoginForm';
import Pricing from '../../components/Pricing/Pricing';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import FeatureSectionExternal from '../../components/FeatureSectionExternal/index';

import { Switch, Route } from "react-router-dom";
import NewCounsleor from '../../pages/NewCounselor';





function ExternalRoute() {
  return (
    <>

      <Switch>
        <Route exact path="/">
          <HomeExternal />
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
          <h1> Contact </h1>
        </Route>
        <Route exact path="/register" >
          <ExternalNav />
          <RegisterForm />
        </Route>
        <Route exact path="/register-counselor/*" >
          <ExternalNav />
          <NewCounsleor />
        </Route>
        <Route path="*" >
          <ExternalNav />
          <h1 className="text-5xl text-red-500 m-12">404 Page not found</h1>
        </Route>
      </Switch>
    </>
  );
}


export default ExternalRoute;
