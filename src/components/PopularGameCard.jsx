import React from 'react';
import styles from './PopularGameCard.module.css';

const PopularGameCard = ({ children }) => {
  return <div className={`${styles.card}`}>{children}</div>;
};

export default PopularGameCard;
