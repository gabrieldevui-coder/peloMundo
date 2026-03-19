import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} Pelo Mundo. Projeto desenvolvido por Gabriel
      França.
    </footer>
  );
};

export default Footer;
