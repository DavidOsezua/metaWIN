import React from 'react';
import styles from './InstantWins.module.css';
import Table from '../components/Table';
import { SwitchButton, HeaderEmpty } from '../components';
import '../App.css';

const InstantWins = () => {
  return (
    <section className={`${styles.section} transition`}>
      <HeaderEmpty />
      <div className={`${styles.container}`}>
        <div>
          <SwitchButton
            text1={`Latest WIns`}
            text2={`Top Wins`}
            className={`w-[13.3rem] mx-[auto]`}
            component={<Table />}
            component2={<Table />}
          />
        </div>
      </div>
    </section>
  );
};

export default InstantWins;
