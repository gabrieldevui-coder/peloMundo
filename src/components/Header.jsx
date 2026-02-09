import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.svg?react';
import UserIcon from '../assets/user-line.svg?react';
import { dataUser } from '../UserContext';
const Header = () => {
  const { data, userLogout } = React.useContext(dataUser);
  function handleClick() {
    console.log('clicou');
  }
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
            <>
              {data ? (
                <div>
                  <NavLink className={styles.login} to="/conta">
                    <span>{data.name}</span>
                    <UserIcon style={{ with: '20px', height: '20px' }} />
                  </NavLink>
                </div>
              ) : (
                <NavLink className={styles.login} to="/login">
                  <span>Entrar / Cadastrar</span>
                  <UserIcon style={{ with: '20px', height: '20px' }} />
                </NavLink>
              )}
            </>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
