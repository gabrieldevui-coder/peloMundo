import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">Entrar / Cadastrar</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
