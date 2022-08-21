import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATAGORIES',
    },
  ];

  return (
    <nav className="Nav-bar">
      <h1>Bookstore CMS</h1>
      <div className="links-wrap">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink className="navlink" to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
