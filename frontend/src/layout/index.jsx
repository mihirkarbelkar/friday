import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Dashboard from 'containers/dashboard';
import UserProfile from 'containers/user-profile';
import AI from 'containers/ai';
import AIStocks from 'containers/ai/stocks';
import NavBar from './navBar';
import SideBar from './sideBar';
import './style.scss';

const Layout = (props) => {
  const { history } = props;

  return (
    <Container fluid className="site-layout d-flex flex-column">
      <NavBar />
      <div className="d-flex sidebar-and-main">
        <SideBar />
        <div className="content-container">
          <Route path="/dashboard" exact component={Dashboard} history={history} />
          <Route path="/ai" exact component={AI} history={history} />
          <Route path="/profile" exact component={UserProfile} history={history} />
          <Route path="/ai/stocks" exact component={AIStocks} history={history} />
        </div>
      </div>
    </Container>
  );
};

export default Layout
