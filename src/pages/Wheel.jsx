import React, { useState, useRef } from 'react';
import styles from './Wheel.module.css';
import Table from '../components/Table';
import { HeaderEmpty, SwitchButton, SpinWheel } from '../components';
import { ethAmt, numberOfSpins, potentialWins } from '../Data/data';
import { spinWheel, arrow, spinIcon } from '../assets';
import '../App.css';

const Wheel = () => {
  const wheelRef = useRef();
  const [name, setName] = useState('circle');
  const [amount, setAmount] = useState(`0`);
  const [active, setActive] = useState('Low');

  const startRotation = () => {
    if (wheelRef.current) {
      let randomDeg = Math.floor(800 + Math.random() * 1000);
      const mod = randomDeg % 360;
      randomDeg = randomDeg - (mod % (360 / 8));
      wheelRef.current.style.transition = 'all 3s';
      wheelRef.current.style.transform = `rotate(${randomDeg}deg)`;
    }
  };

  const amountHandler = (value) => {
    setAmount(value);
  };

  const activeHandler = (spinValue) => {
    setActive(spinValue);
  };
  return (
    <section className={`${styles.section} transition`}>
      <HeaderEmpty />

      <div className={`${styles.container}`}>
        {/* **************** CONTAINER ******************** */}
        <div className={`flex ${styles.top}`}>
          {/* **************** INFO SECTION******************** */}
          <div
            className={`bg-[#560378] p-[1rem] text-[#fff] text-[0.7rem] ${styles.infoContainer}`}
          >
            <div>
              {/* **************** AMOUNT LABEL ******************** */}
              <div className='flex justify-between items-center pb-[0.9rem]'>
                <p>Amount:</p>
                <p>0.1ETH</p>
              </div>
              {/* **************** AMOUNT SELECTION ******************** */}
              <div
                className={`flex gap-[1rem] justify-between bg-[#3C0054] px-[1.5rem] py-[0.6rem] rounded-md text-[0.9rem] items-center `}
              >
                <p>{`$${amount}`}</p>

                <div className='flex gap-[1rem]'>
                  {ethAmt.map((x) => (
                    <button
                      onClick={() => amountHandler(x)}
                      className={` ${styles.amtBtn} ${
                        amount === x ? styles.active : ''
                      }`}
                    >
                      {x}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* **************** POTENTIAL WINS ******************** */}
            <div>
              <p className='pb-[0.9rem]'>potential Wins</p>
              <div className='flex  justify-between gap-[0.8rem]'>
                {potentialWins.map((potentialWin) => (
                  <p className='bg-[#3C0054] w-[7rem] text-center py-[0.5rem] text-[0.9rem] rounded-md'>
                    {potentialWin}
                  </p>
                ))}
              </div>
            </div>

            {/* **************** NUMBER OF SPINS ******************** */}
            <div>
              <p>Numbers of spins</p>
              <div className='flex gap-[0.9rem] justify-between bg-[#3C0054] py-[0.7rem] px-[1rem] rounded-md text-[0.9rem] text-[#CACACA]'>
                {numberOfSpins.map((spin) => (
                  <span
                    onClick={() => activeHandler(spin)}
                    className={`${
                      active === spin ? styles.active : ''
                    } cursor-pointer `}
                  >
                    {spin}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={startRotation}
              className='flex items-center text-[0.9rem] gap-[0.5rem] bg-[#FF6665] w-full py-[1rem] justify-center rounded-md '
            >
              Spin <img src={spinIcon} className={name} />
            </button>
          </div>

          {/* **************** WHEEL SECTION ******************** */}
          <div className={` ${styles.wheelContainer}  bg-[#3C0054]`}>
            <p className='text-center bg-[#4C026A] py-[0.7rem] text-[#CACACA]'>
              Spin the Wheel
            </p>

            <div className='pb-[4rem] relative'>
              <div>
                <SpinWheel startRotation={startRotation} wheelRef={wheelRef} />
              </div>
            </div>
          </div>
        </div>
        {/* **************** TABLE FOR LEADER AND LATEST WINS ******************** */}
        <SwitchButton
          text1={`Leader Board`}
          text2={`Latest Win`}
          className={`w-[15rem] px-[0.6rem]`}
          component={<Table />}
          component2={<Table />}
        />
      </div>
    </section>
  );
};

export default Wheel;
