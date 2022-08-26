import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './NavBar.module.css';

const NavBar = () => {
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
    <nav className={styles.navbar}>
      <p className={styles.logo}>Awesome Bookstore</p>
      <div className={styles.linkswrap}>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink className="navlink" to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </div>
      <div className={styles.profile}>
        <FontAwesomeIcon classname={styles.icon} icon={faUser} />
      </div>
    </nav>
  );
};

export default NavBar;
