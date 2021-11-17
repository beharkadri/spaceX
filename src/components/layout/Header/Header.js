import { Link, NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to='/'>
        <h1>SpaceX</h1>
      </Link>
      <nav>
        <NavLink to='/' exact activeClassName={styles.active}>
          <h3>Home</h3>
        </NavLink>
        <NavLink to='/about' exact activeClassName={styles.active}>
          <h3>About</h3>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
