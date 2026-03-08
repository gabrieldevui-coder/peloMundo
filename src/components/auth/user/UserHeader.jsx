import React from 'react';
import UserNav from './UserNav';
import { useLocation } from 'react-router-dom';
import styles from './UserHeader.module.css';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const path = useLocation();
  React.useEffect(() => {
    if (path.pathname === '/conta') {
      setTitle('Minha Galeria');
    }
    if (path.pathname === '/conta/postar') {
      setTitle('Postar Viagem');
    }
    if (path.pathname === '/conta/estatiscas') {
      setTitle('Estatísticas');
    }
  }, [path]);
  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{title}</h1>
        <UserNav />
      </div>
    </>
  );
};

export default UserHeader;
