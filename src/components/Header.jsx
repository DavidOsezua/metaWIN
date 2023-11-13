import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { logo, menu, close, image } from '../assets';
import Button from './Button';

const Header = ({
  toggle,
  toggleHandler,
  collapseHandler,
  children,
  collapseSidebar,
}) => {
  return (
    <header
      className={`bg-[#3c0054] ${styles.header} ${
        collapseSidebar && styles.headerCollapse
      } `}
    >
      <nav className={`bg-[#3c0054] ${styles.navContainer}`}>
        <div className={`${styles.menu1LogoContainer}`}>
          <img
            src={menu}
            className={`${styles.menu1}`}
            onClick={collapseHandler}
          />

          <NavLink to='/'>
            <img src={logo} className='cursor-pointer ' />
          </NavLink>
        </div>

        <div className={`${styles.menu2BtnContainer}`}>
          <Button text={`Connect`} />

          <div>
            <img
              src={toggle ? close : menu}
              className={`${styles.menu2} `}
              onClick={toggleHandler}
            />
          </div>
        </div>
      </nav>
      {children}
    </header>
  );
};

export default Header;
