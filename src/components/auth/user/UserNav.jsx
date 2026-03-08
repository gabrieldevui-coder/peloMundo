import React from 'react';
import styles from './UserNav.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { dataUser } from '../../../UserContext';
import StatisticsIcon from '../../../assets/statistics.svg?react';
import LogoutIcon from '../../../assets/logout.svg?react';
import PostIcon from '../../../assets/post.svg?react';
import GalleryIcon from '../../../assets/gallery.svg?react';
import useMedia from '../../../hooks/useMedia';
const UserNav = () => {
  const { userLogout } = React.useContext(dataUser);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);
  return (
    <nav>
      {mobile && (
        <button
          className={`${styles.mobileBtn} ${mobileMenu && styles.mobileActiveBtn}`}
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Menu"
        ></button>
      )}
      <ul
        className={`${mobile ? styles.navMobile : styles.navigate} ${mobileMenu && styles.navMobileActive}`}
      >
        <li>
          <NavLink
            data-label="Minha Galeria"
            end
            to="/conta"
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            <GalleryIcon />
            {mobile && 'Minha Galeria'}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/conta/postar"
            data-label="Postar Viagem"
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            <PostIcon />
            {mobile && 'Postar Viagem'}
          </NavLink>
        </li>
        <li>
          <NavLink
            data-label="Estatísticas"
            to="/conta/estatiscas"
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            <StatisticsIcon />
            {mobile && 'Estatísticas'}
          </NavLink>
        </li>
        <li>
          <button
            data-label="Sair"
            onClick={userLogout}
            className={styles.button}
          >
            <LogoutIcon />
            {mobile && 'Sair'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;
