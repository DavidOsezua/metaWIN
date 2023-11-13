import React, { useState, useRef } from 'react';
import { arrow } from '../assets';
import { wheelSlice } from '../Data/data';
import './SpinWheel.css';

function SpinWheel({ name, startRotation, wheelRef }) {
  return (
    <div className='body'>
      <div className='container'>
        <div className='circle1'></div>

        <div className='circle2'>
          <div className='arrow'>
            <img src={arrow} />
          </div>
          <div className='inner-circle' ref={wheelRef}>
            {wheelSlice.map((slice) => (
              <div className={slice.class}>{slice.result}</div>
            ))}
          </div>
        </div>

        <div className='circle3'></div>
      </div>
    </div>
  );
}

export default SpinWheel;
