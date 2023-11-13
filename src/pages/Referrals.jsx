import React from 'react';
import { SwitchButton, HeaderEmpty } from '../components';
import styles from './Referrals.module.css';
import StatsCard from '../components/StatsCard';
import '../App.css';

/* **************** REFERRAL COMPONENT ******************** */
export const Referral = () => {
  return (
    <>
      <p className='text-[#D4D4D4] text-center transition'>
        Nothing to display
      </p>
    </>
  );
};

/* **************** END OF REFERRAL COMPONENT ******************** */

/* **************** SUMMARY COMPONENT ******************** */
export const Summary = () => {
  return (
    <section className={`${styles.section} transition`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.contentContainer}`}>
          <h3 className='font-bold'>Earn ETH by sharing MetaWin!</h3>
          <p>
            Post your unique tracker in your socials, in your Discord and send
            it to anyone with a passion for NFTs with a little explanation of
            MetaWin.
          </p>

          <p>
            You’ll be rewarded handsomely with 2.5% of their Competition entry
            purchases day after day paid to you in ETH
          </p>
          <p>Not bad!</p>
        </div>

        <div className={`${styles.linkContainer} text-center text-[#fff]`}>
          <h3>Here's the links</h3>

          <div className={`${styles.linkContainer}`}>
            <p className='bg-[#560078] rounded-[8px] w-[328px] h-[47px] mx-[auto] pt-[0.7rem]  text-[#d1d1d1]'>
              https://metawin.com/t/lorem
            </p>

            <div>
              <button className='bg-[#FF6665] rounded-[8px] w-[328px] h-[47px] mx-[auto] pt-[0.5rem]  '>
                Copy Link
              </button>
            </div>

            <div>
              <button className='bg-[#FF8584] rounded-[8px] w-[328px] h-[47px] mx-[auto] pt-[0.5rem]  '>
                {' '}
                Share on Twitter
              </button>
            </div>
          </div>
        </div>

        <div className={`${styles.hr}`}></div>
      </div>

      <div className='pb-[1rem]'>
        <h3 className='font-bold text-center text-[#fff] mb-[1rem]'>
          Your Statistics
        </h3>
        <div className={`${styles.cardContainer}`}>
          <StatsCard text={`Clicks`} />
          <StatsCard text={`Referrals`} />
          <StatsCard text={`Revenues`} />
        </div>
      </div>
    </section>
  );
};
/* **************** END OF SUMMARY COMPONENT ******************** */

/* **************** REFERRAL PAGE ******************** */
const Referrals = () => {
  return (
    <section className={`${styles.section} transition`}>
      <HeaderEmpty />
      <div className={`${styles.container}`}>
        <SwitchButton
          text1={`Summary`}
          text2={`Referrals`}
          className={styles.btn}
          component={<Summary />}
          component2={<Referral />}
        />
      </div>
    </section>
  );
};

export default Referrals;
