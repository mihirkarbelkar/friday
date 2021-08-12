import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom';

const NavBar = () => {
  const history = useHistory();

  const menus = [{
    label: 'Explore',
    link: '/dashbpoard'
  }, {
    label: 'Watchlist',
    link: '/watchlist'
  }, {
    label: 'AI Help',
    link: '/ai'
  }];
  
  const handleNavClick = (e, path) => {
    e.preventDefault();
    history.push(path);
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="w-100">
      <>
        <Navbar.Brand href="" className="d-flex align-items-center justify-content-center h-100">
          <img
            alt=""
            src="/logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" activeKey={history.location.pathname}>
            <Nav.Link as={Link} to="/dashboard" className={history.location.pathname === '/dashboard' ? 'active' : ''}>Explore</Nav.Link>
            <Nav.Link as={Link} to="/investments" className={history.location.pathname === '/investments' ? 'active' : ''}>Watchlist</Nav.Link>
            <Nav.Link as={Link} to="/ai" className={history.location.pathname === '/ai' ? 'active' : ''}>AI Help</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </>
    </Navbar>
  );
};

export default NavBar;
