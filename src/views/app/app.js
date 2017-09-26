import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';

import { authActions, getAuth } from 'src/auth';
import Header from '../components/header';
import RequireAuthRoute from '../components/require-auth-route';
import RequireUnauthRoute from '../components/require-unauth-route';
import SignInPage from '../pages/sign-in';
import ConnorPage from '../pages/connor';
import LandingPage from '../pages/landing';
import LandingPage2 from '../pages/landing2';

import TasksPage from '../pages/tasks';
import User from '../pages/user';
import Dashboard from '../pages/dashboard';
import FourohFour from '../pages/dashboard/components/Dashboard404';


const App = ({authenticated, signOut}) => (
  <div>
      <RequireAuthRoute authenticated={authenticated} exact path="/" component={TasksPage}/>
      <RequireUnauthRoute authenticated={authenticated} path="/sign-in" component={SignInPage}/>
      <RequireUnauthRoute authenticated={authenticated} path="/connor" component={ConnorPage}/>
      <RequireUnauthRoute authenticated={authenticated} path="/landing" component={LandingPage}/>
      <RequireUnauthRoute authenticated={authenticated} path="/landing2" component={LandingPage2}/>
      <RequireUnauthRoute authenticated={authenticated} path="/user" component={User}/>
      <RequireUnauthRoute authenticated={authenticated} path="/dashboard" component={Dashboard}/>
  </div>
)

App.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired
};


//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = getAuth;

const mapDispatchToProps = {
  signOut: authActions.signOut
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
