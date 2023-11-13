import React from 'react';
import styles from './History.module.css';
import { SwitchButton, HeaderEmpty } from '../components';
import '../App.css';

const History = () => {
  return (
    <section className={`${styles.section} transition`}>
      <HeaderEmpty />
      <div className={`${styles.container}`}>
        <SwitchButton
          text1={`Competitions`}
          text2={`Games`}
          className={`w-[204px] mb-[1rem] `}
        />
        <SwitchButton text1={`Instant wins`} text2={`Mini Games`} />

        <div className={`${styles.hr}`}></div>

        <ul className={`${styles.headings}`}>
          <li>Date</li>
          <li>Name</li>
          <li>Event</li>
          <li>Round ID</li>
          <li>Amout</li>
        </ul>

        <div className={`flex justify-center mt-[1rem] `}>
          <p className='text-[#fff]'>Nothing to Display</p>
        </div>
      </div>
    </section>
  );
};

export default History;
