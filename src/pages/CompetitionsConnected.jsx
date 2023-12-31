import React, { useContext, useEffect, useState } from 'react';
import styles from './CompetitionsConnected.module.css';
import { liveWins2, miniGames } from '../Data/data';
import Modal from '../components/Modal';

import {
  Hero,
  GameCard,
  Slider,
  HeaderEmpty,
  MiniGameCard,
} from '../components'; // These imports are coming from the index.js file in the component folder. This method minimizes the number of import used in a particular component
import Table from '../components/Table';
import { NavLink } from 'react-router-dom';
import { Zoom, Fade } from 'react-awesome-reveal';
import '../App.css';

/* This Competitions Component renders the Competiton page on the website. It has two component in it which are the Livewin-Gamecard item and the Livewin-GameCards .  */

//LivewinGameCards Component
export const LiveWinCards = () => {
  return (
    <div className=' '>
      <p className='text-[#fff] pb-[1rem] pl-[1rem] pt-[1rem]'>Live wins</p>
      <div className={`${styles.slideContainer}`}>
        {liveWins2.map((liveWin, index) => (
          <div className={`${styles.slide}`} key={index}>
            <GameCardItem liveWin={liveWin} />
          </div>
        ))}
      </div>
    </div>
  );
};

//Livewin-Gamecard item Component
export const GameCardItem = ({ liveWin }) => {
  return (
    <Zoom>
      <GameCard>
        <img src={liveWin.image} />
        <div className='text-center pt-[0.3rem] '>
          <p className='text-white'>{liveWin.content}</p>
          <p className='text-[#FFC72E]'>{liveWin.amount}</p>
        </div>
      </GameCard>
    </Zoom>
  );
};

//Competition Component
const CompetitionsConnected = () => {
  const [modal, setModal] = useState(false);
  const modalHandler = () => {
    setModal(!modal);
  };

  useEffect(() => {
    setModal(true);
  }, []);

  return (
    <section className={`bg-[#70008C] ${styles.section} transition`}>
      {modal && <Modal modalHandler={modalHandler} />}
      <HeaderEmpty />

      <LiveWinCards />

      <div className={`${styles.competitionsContainer} `}>
        <Hero />
      </div>

      <div>
        <p className='text-[#fff] pb-[1rem] pl-[1rem] pt-[1rem]'>Mini Games</p>

        {/* The MiniGame cards */}
        <div className={`${styles.slideContainer}`}>
          {miniGames.map((miniGame, index) => (
            <div className={`${styles.slide}`} key={index}>
              <Zoom>
                <MiniGameCard>
                  <NavLink to={miniGame.path}>
                    <img src={miniGame.image} className='  rounded-[20px] ' />
                  </NavLink>
                  <div className='text-center pt-[0.3rem]'>
                    <p className='text-white'>{miniGame.content}</p>
                    <p className='text-[#FFC72E]'>{miniGame.amount}</p>
                  </div>
                </MiniGameCard>
              </Zoom>
            </div>
          ))}
        </div>
      </div>

      <div className={`mt-[4rem]`}>
        <Table />
      </div>
    </section>
  );
};

export default CompetitionsConnected;
