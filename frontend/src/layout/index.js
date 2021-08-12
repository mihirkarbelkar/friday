import React from 'react';
import { Route, Link } from 'react-router-dom';
import Dashboard from 'containers/dashboard';
import UserProfile from 'containers/user-profile';
import Investment from 'containers/investment';

const Layout = (props) => {
  const { history } = props;

  const nav = () => (
    <>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/investment">Investment</Link>
      <Link to="/profile">Profile</Link>
    </>
  );

  return (
    <>
      {nav()}
      <Route path="/dashboard" exact component={Dashboard} history={history} />
      <Route path="/investment" exact component={Investment} history={history} />
      <Route path="/profile" exact component={UserProfile} history={history} />
    </>
  );
};

export default Layout
