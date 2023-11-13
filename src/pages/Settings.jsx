import React from 'react';
import { logo2, edit, twitter2, discord2 } from '../assets';
import { HeaderEmpty } from '../components';
import styles from './Settings.module.css';
import Button from '../components/Button';
import '../App.css';

const Settings = () => {
  return (
    <section className={`${styles.section} transition`}>
      <HeaderEmpty />
      <div className={`${styles.settingsContainer}`}>
        <div>
          <div className='flex justify-center '>
            <img src={logo2} />
            <img src={edit} />
          </div>

          <div className='text-center'>
            <p className='text-[#fff]'>Username</p>
            <p className='text-[#A3A3A3]'>0xcccxxxxxxxxxxxxxxxxcccccc</p>
          </div>
        </div>

        <form>
          <div className='text-center'>
            <div className='pb-[2rem]'>
              <input
                type='text'
                placeholder='Username'
                className='px-[1rem] py-[0.5rem] rounded-md w-[20rem] bg-[#3C0054] border-[1px] border-[#B000DC] outline-none'
              />
            </div>

            <div className='pb-[2rem]'>
              <input
                type='text'
                placeholder='Email'
                className='px-[1rem] py-[0.5rem] rounded-md w-[20rem] bg-[#3C0054] border-[1px] border-[#B000DC] outline-none'
              />{' '}
            </div>

            <Button text={`Save Changes`} className={`w-[20rem]`} />
          </div>
        </form>

        <div>
          <p className='font-bold text-[#fff] mb-[2rem]'>
            Connect Your Social Accounts
          </p>

          <div className='flex justify-between items-center border-t-[1px] border-t-[#70008C] py-[0.8rem] '>
            <div className='flex items-center gap-[5px]  '>
              <img src={discord2} />
              <p className='font-bold text-[#fff] uppercase '>Discord</p>
            </div>

            <Button text={`Connect`} />
          </div>

          <div className='flex justify-between items-center border-t-[1px] py-[0.8rem] border-t-[#70008C] '>
            <div className='flex items-center gap-[5px]  '>
              <img src={twitter2} />
              <p className='font-bold text-[#fff] uppercase '>Twitter</p>
            </div>

            <Button text={`Connect`} />
          </div>
        </div>

        <div className='text-[#FFF]'>
          <div className='border-b-[1px] py-[0.5rem] border-b-[#70008C] '>
            <button>Logs</button>
          </div>

          <div className='border-b-[1px] py-[0.5rem] border-b-[#70008C] '>
            <button>Game History</button>
          </div>
        </div>

        <button className='mb-[2rem] border-[1px] w-[6.8125rem] mx-[auto] border-[#70008C] rounded-md text-white px-1 py-1'>
          Log out
        </button>
      </div>
    </section>
  );
};

export default Settings;
