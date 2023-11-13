import React from 'react';
import Button from './Button';
import styles from "./Hero.module.css"
import { hero, heroMobile } from '../assets';

const Hero = () => {
  return (
    <div>
      <img src={hero} className={`${styles.desktop}`} />
      <img src={heroMobile} className={`${styles.mobile}`} />
    </div>
  );
};

export default Hero;
