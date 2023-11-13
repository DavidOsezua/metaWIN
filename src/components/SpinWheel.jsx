import React, { useState, useRef } from 'react';
import { arrow } from '../assets';
import './SpinWheel.css';

function SpinWheel({ name, startRotation,wheelRef }) {
  return (
    <div className='body'>
      <div className='arrow'>
        <img src={arrow} />
      </div>

      <div className='container' ref={wheelRef}>
        <div className='circle1'></div>

        <div className='circle2'>
          <div className='inner-circle'>
            <div class='one'>L</div>
            <div class='two'>W</div>
            <div class='three'>L</div>
            <div class='four'>W</div>
            <div class='five'>L</div>
            <div class='six'>W</div>
            <div class='seven'>L</div>
            <div class='eight'>W</div>
          </div>
        </div>

        <div className='circle3'></div>
      </div>
    </div>
  );
}

export default SpinWheel;
