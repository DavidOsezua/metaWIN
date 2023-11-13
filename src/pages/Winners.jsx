import React from 'react';
import Table from '../components/Table';
import styles from './Winners.module.css';
import { HeaderEmpty } from '../components';

const Winners = () => {
  return (
    <section className={`${styles.section}`}>
      <HeaderEmpty/>
      <div className={`${styles.container}`}>
        <Table />
      </div>
    </section>
  );
};

export default Winners;
