import React from 'react'
import styles from "./MiniGameCard.module.css"

const MiniGameCard = ({children}) => {
  return <div className={`${styles.card}`}>{children}</div>;
}

export default MiniGameCard