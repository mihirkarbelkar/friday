import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Router } from 'react-router';
import Layout from 'app/layout';
import history from 'app/history';

const Routes = () => {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/dashboard" />} />
          <Layout path="*" exact component={Layout} history={history} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
