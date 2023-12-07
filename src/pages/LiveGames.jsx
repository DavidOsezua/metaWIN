import React from 'react';
import styles from './LiveGames.module.css';
import { LiveWinCards } from './Competitions';
import { popularGames } from '../Data/data';

import {
  Hero,
  GameCard,
  Slider,
  HeaderEmpty,
  MiniGameCard,
  PopularGameCard,
} from '../components';
import '../App.css';
import Table from '../components/Table';
import { Zoom } from 'react-awesome-reveal';

export const PopularGameCards = ({ text }) => {
  return (
    <div>
      <p className='text-[#fff] pb-[1rem] pl-[1rem] pt-[1rem]'>{text}</p>
      <div className={`${styles.slideContainer2}`}>
        {popularGames.map((liveWin) => (
          <div className={`${styles.slide}`}>
            <Zoom>
              <PopularGameCard>
                <img src={liveWin.image} />
                <div className='text-center pt-[0.3rem]'>
                  <p className='text-white'>{liveWin.content}</p>
                  <p className='text-[#FFC72E]'>{liveWin.amount}</p>
                </div>
              </PopularGameCard>
            </Zoom>
          </div>
        ))}
      </div>
    </div>
  );
};

const LiveGames = () => {
  return (
    <section className={`bg-[#70008C] ${styles.section} transition`}>
      <HeaderEmpty />

      <LiveWinCards />

      <PopularGameCards text={`Popular Games`} />

      <PopularGameCards />

      <div className={`mt-[4rem]`}>
        <Table />
      </div>
    </section>
  );
};

export default LiveGames;
