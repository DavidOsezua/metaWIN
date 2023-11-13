import React from 'react';
import styles from './Wallet.module.css';
import { HeaderEmpty } from '../components';
import '../App.css';

const Wallet = () => {
  return (
    <section className={`${styles.section} transition`}>
      <HeaderEmpty />
      <div className={`${styles.container}`}>
        <div className='max-w-[900px] mx-[auto] p-[0.8rem] bg-[#3c0054] rounded-[8px] flex justify-between'>
          <div className='text-[#fff] flex gap-[10px]'>
            <img />
            <p>0</p>
            <p>ETH</p>
          </div>

          <button className=' text-[#fff] w-[129px] h-[36px] bg-[#ff6665] rounded-[4px]'>
            Swap
          </button>
        </div>

        <div className={`flex justify-center mt-[1rem] `}>
          <p className='text-[#fff]'>Transaction History</p>
        </div>

        <div className={`flex justify-center mt-[1rem] `}>
          <p className='text-[#d1d1d1] text-[15px]'>
            You don’t have any transactions yet
          </p>
        </div>
      </div>
    </section>
  );
};

export default Wallet;
