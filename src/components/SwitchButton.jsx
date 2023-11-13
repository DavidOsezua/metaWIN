import React, { useState } from 'react';
import styles from './SwitchButton.module.css';

const SwitchButton = ({ text1, text2, className, component, component2 }) => {
  const [active, setActive] = useState(text1);

  const activeHandler = (text) => {
    setActive(text);
  };
  return (
    <>
      <div className={`${styles.toggle} ${className} `}>
        <button
          onClick={() => activeHandler(text1)}
          className={`${active === text1 ? styles.text1 : ''}`}
        >
          {text1}
        </button>
        <button
          onClick={() => activeHandler(text2)}
          className={`${active === text2 ? styles.text1 : ''}`}
        >
          {text2}
        </button>
      </div>

      <div className='mt-[2rem]'>
        {active === text1 && <div>{component}</div>}
        {active === text2 && <div>{component2}</div>}
      </div>
    </>
  );
};

export default SwitchButton;
