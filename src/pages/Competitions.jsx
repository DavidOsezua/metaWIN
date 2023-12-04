import React, { useContext, useEffect, useState } from 'react';
import styles from './Competitions.module.css';
import { liveWins, miniGames } from '../Data/data';

import {
  Hero,
  GameCard,
  Slider,
  HeaderEmpty,
  MiniGameCard,
} from '../components'; // These imports are coming from the index.js file in the component folder. This method minimizes the number of import used in a particular component
import Modal from '../components/Modal';
import Table from '../components/Table';
import { NavLink } from 'react-router-dom';
import { Zoom, Fade } from 'react-awesome-reveal';
import '../App.css';

/* This Competitions Component renders the Competiton page on the website. It has two component in it which are the Livewin-Gamecard item and the Livewin-GameCards .  */

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

//Livewin-GameCards Component
export const LiveWinCards = () => {
  return (
    <div className=' '>
      <p className='text-[#fff] pb-[1rem] pl-[1rem] pt-[1rem]'>Live wins</p>
      <div className={`${styles.slideContainer}`}>
        {liveWins.map((liveWin, index) => (
          <div className={`${styles.slide}`} key={index}>
            <GameCardItem liveWin={liveWin} />
          </div>
        ))}
      </div>
    </div>
  );
};

//Competition Component
const Competitions = () => {

  return (
    <section className={`bg-[#70008C] ${styles.section} transition`}>
      
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

export default Competitions;
