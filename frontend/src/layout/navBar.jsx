import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom';

const NavBar = () => {
  const history = useHistory();

  const menus = [{
    label: 'Explore',
    link: '/dashboard'
  }, {
    label: 'Watchlist',
    link: '/investments'
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
            {menus.map((menu) => (
              <Nav.Link as={Link} to={menu.link} className={history.location.pathname.startsWith(menu.link) ? 'active' : ''}>
                {menu.label}
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
