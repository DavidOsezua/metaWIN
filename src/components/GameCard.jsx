import React from 'react';
import styles from './GameCard.module.css';

const GameCard = ({ children }) => {
  return <div className={`${styles.card}`}>{children}</div>;
};

export default GameCard;
