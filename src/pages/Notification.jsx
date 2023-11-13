import React from 'react';
import { HeaderEmpty } from '../components';
import styles from './Notification.module.css';
import '../App.css';

const Notification = () => {
  return (
    <section className={`${styles.section} transition`}>
      <HeaderEmpty />

      <div className={`${styles.container}`}>
        <div className={`${styles.toggleContainer}`}>
          <div className={`${styles.toggle}`}>
            <button>All</button>
            <button> Wins</button>
            <button className={`${styles.text1}`}>My Gifts</button>
          </div>
        </div>

        <div className='flex justify-center gap-[2rem] text-[#fff]'>
          <p>Unclaimed</p>
          <p>claimed</p>
        </div>

        <div className={`${styles.hr}`}></div>

        <p className='text-[#D4D4D4] text-center'>Nothing to display</p>
      </div>
    </section>
  );
};

export default Notification;
