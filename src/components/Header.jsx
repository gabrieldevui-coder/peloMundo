import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.svg?react';
import UserIcon from '../assets/user-line.svg?react';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className="container">
        <ul className={styles.navigate}>
          <li>
            <NavLink to="/" end aria-label="peloMundo - Início">
              <Logo />
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.login} to="/login">
              <span>Entrar / Cadastrar</span>
              <UserIcon style={{ with: '20px', height: '20px' }} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
