import React from 'react';
import styles from './Sidebar1.module.css';
import { NavLink } from 'react-router-dom';
import { competitions, winners, discord, twitter } from '../assets';

const Sidebar1 = ({ toggle, collapseSidebar, toggleHandler }) => {
  return (
    
    <ul
      className={`${styles.navMenu} ${toggle && styles.showMenu} ${
        collapseSidebar && styles.menuCollapse
      }`}
      onClick={toggleHandler}
    >
      <li className={`bg-[#70008c] ${styles.navItem} cursor-pointer`}>
        <NavLink to='/competitions'>
          <img src={competitions} className={`${styles.navItemImage}`} />
        </NavLink>

        <NavLink
          to='/competitions'
          className={`${styles.navItemText} ${
            collapseSidebar && styles.textRemove
          } `}
        >
          Competitions
        </NavLink>
      </li>

      <li className={`bg-[#70008c] ${styles.navItem} cursor-pointer`}>
        <NavLink to='/winners'>
          <img src={winners} className={`${styles.navItemImage}`} />
        </NavLink>

        <NavLink
          to='/winners'
          className={`${styles.navItemText} ${
            collapseSidebar && styles.textRemove
          }`}
        >
          Winners
        </NavLink>
      </li>

      <li className={`bg-[#70008c] ${styles.navItem} cursor-pointer`}>
        <img src={discord} className={`${styles.navItemImage}`} />
        <p
          className={`${styles.navItemText} ${
            collapseSidebar && styles.textRemove
          }`}
        >
          Join the Arena
        </p>
      </li>

      <li className={`bg-[#70008c] ${styles.navItem} cursor-pointer`}>
        <img src={twitter} className={`${styles.navItemImage}`} />
        <p
          className={`${styles.navItemText} ${
            collapseSidebar && styles.textRemove
          }`}
        >
          Twitter
        </p>
      </li>
    </ul>
  );
};

export default Sidebar1;
