import React, { useState } from 'react';
import {
  competitions,
  winners,
  discord,
  twitter,
  dice,
  liveGames,
  activity,
  notification,
  wallet,
  history,
  referral,
  setting,
} from '../assets';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar2.module.css';

const Sidebar2 = ({ toggle, collapseSidebar, toggleHandler }) => {
  return (
    <ul
      className={`${styles.navMenu} ${toggle && styles.showMenu} ${
        collapseSidebar && styles.menuCollapse
      } `}
      onClick={toggleHandler}
    >
      <div className='bg-[#70008c] rounded-[8px] p-[0]'>
        <li className={`bg-[#70008c] ${styles.navItem} `}>
          <NavLink to='/competitions'>
            <img src={competitions} className={`${styles.navItemImage} `} />
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

        <li className={`bg-[#70008c] ${styles.navItem} `}>
          <NavLink to='/instantwins'>
            <img src={dice} className={`${styles.navItemImage}`} />
          </NavLink>

          <NavLink
            to='/instantwins'
            className={`${styles.navItemText} ${
              collapseSidebar && styles.textRemove
            } text-[#FF6665] `}
          >
            Instant Win
          </NavLink>
        </li>

        <li className={`bg-[#70008c] ${styles.navItem} `}>
          <NavLink to='/livegames'>
            <img src={liveGames} className={`${styles.navItemImage}`} />
          </NavLink>

          <NavLink
            to='/livegames'
            className={`${styles.navItemText} ${
              collapseSidebar && styles.textRemove
            }  text-[#FFC72E]`}
          >
            Live Games
          </NavLink>
        </li>
      </div>

      <div className='bg-[#70008c] rounded-[8px]'>
        <li className={`bg-[#70008c] ${styles.navItem}`}>
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

        <li className={`bg-[#70008c] ${styles.navItem}`}>
          <NavLink to='/activity'>
            <img src={activity} className={`${styles.navItemImage}`} />
          </NavLink>

          <NavLink
            to='/activity'
            className={`${styles.navItemText} ${
              collapseSidebar && styles.textRemove
            }`}
          >
            Activity
          </NavLink>
        </li>
      </div>

      <div className={`bg-[#70008c] rounded-[8px] ${styles.navItemContainer}`}>
        <li className={`bg-[#70008c] ${styles.navItem}`}>
          <NavLink to='/notifications'>
            <img src={notification} className={`${styles.navItemImage}`} />
          </NavLink>

          <NavLink
            to='/notifications'
            className={`${styles.navItemText} ${
              collapseSidebar && styles.textRemove
            }`}
          >
            Notification
          </NavLink>
        </li>

        <li className={`bg-[#70008c] ${styles.navItem}`}>
          <NavLink to='/wallet'>
            <img src={wallet} className={`${styles.navItemImage}`} />
          </NavLink>

          <NavLink
            to='/wallet'
            className={`${styles.navItemText} ${
              collapseSidebar && styles.textRemove
            }`}
          >
            Wallet
          </NavLink>
        </li>

        <li className={`bg-[#70008c] ${styles.navItem}`}>
          <NavLink to='/history'>
            <img src={history} className={`${styles.navItemImage}`} />
          </NavLink>

          <NavLink
            to='/history'
            className={`${styles.navItemText} ${
              collapseSidebar && styles.textRemove
            }`}
          >
            History
          </NavLink>
        </li>

        <li className={`bg-[#70008c] ${styles.navItem}`}>
          <NavLink to='/referrals'>
            <img src={referral} className={`${styles.navItemImage}`} />
          </NavLink>

          <NavLink
            to='/referrals'
            className={`${styles.navItemText} ${
              collapseSidebar && styles.textRemove
            }`}
          >
            Referral
          </NavLink>
        </li>

        <li className={`bg-[#70008c] ${styles.navItem}`}>
          <NavLink to='/settings'>
            <img src={setting} className={`${styles.navItemImage}`} />
          </NavLink>

          <NavLink
            to='/settings'
            className={`${styles.navItemText} ${
              collapseSidebar && styles.textRemove
            }`}
          >
            Settings
          </NavLink>
        </li>
      </div>

      <li className={`bg-[#70008c] ${styles.navItem}`}>
        <img src={discord} className={`${styles.navItemImage}`} />
        <p
          className={`${styles.navItemText} ${
            collapseSidebar && styles.textRemove
          }`}
        >
          Join the Arena
        </p>
      </li>

      <li className={`bg-[#70008c] ${styles.navItem}`}>
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

export default Sidebar2;
