import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom';

const NavBar = () => {
  const history = useHistory();

  const menus = [{
    label: 'Explore',
    link: '/explore'
  }, {
    label: 'Watchlist',
    link: '/investments'
  }, {
    label: 'AI Help',
    link: '/ai',
    tag: 'NEW'
  }];

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="w-100">
      <>
        <Navbar.Brand href="" className="d-flex align-items-center justify-content-center h-100">
          <img
            alt=""
            src="/images/logo.png"
            className="d-inline-block align-top logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" activeKey={history.location.pathname}>
            {menus.map((menu) => (
              <Nav.Link as={Link} to={menu.link} className={history.location.pathname.startsWith(menu.link) ? 'active' : ''}>
                {menu.label} {menu.tag && (<span className="nav-tag">{menu.tag}</span>)}
              </Nav.Link>
            ))}
          </Nav>
          <div className="justify-content-end profile-avatar mx-4">
            <img src="/images/avatar.jpeg" alt="avatar" />
          </div>
        </Navbar.Collapse>
      </>
    </Navbar>
  );
};

export default NavBar;
