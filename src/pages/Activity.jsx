import React from 'react';
import styles from './Activity.module.css';
import Table from '../components/Table';
import { HeaderEmpty } from '../components';
import '../App.css';

const Activity = () => {
  return (
    <section className={`${styles.section}`}>
      <HeaderEmpty />
      <div className={`${styles.container}`}>
        <Table />
      </div>
    </section>
  );
};

export default Activity;
