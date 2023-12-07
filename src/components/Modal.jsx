import React, { useState } from 'react';
import {
  object,
  metaWheelBanner,
  tempBtn,
  modalSpin,
  modalClose,
} from '../assets';
import { NavLink } from 'react-router-dom';
import { Zoom } from 'react-awesome-reveal';
import styles from './Modal.module.css';

const Modal = ({ modalHandler }) => {
  const [close, setClose] = useState(false);
  return (
    <div className={styles.overlay}>
      <Zoom>
        <div className={`${styles.modalContent}`}>
          <div className='flex justify-end'>
            <img
              src={modalClose}
              onClick={modalHandler}
              className='cursor-pointer'
            />
          </div>

          <div className='flex gap-[10px] justify-between items-center'>
            <img src={modalSpin} className='w-[23%]' />
            <img src={metaWheelBanner} className='w-[73%]' />
          </div>
          <img src={object} />
          <div className='flex justify-center'>
            <NavLink to='/wheel'>
              {' '}
              <button className='text-[0.8rem] bg-[#FF6665] text-[#fff] p-[0.5rem] rounded-md '>
                Spin Now
              </button>
            </NavLink>
          </div>

          <img src={tempBtn} />
        </div>
      </Zoom>
    </div>
  );
};

export default Modal;
