import React from 'react';
import styles from './Footer.module.css';
import { logo } from '../assets';
import { socialLinks } from '../Data/data';

const Footer = () => {
  return (
    <footer className={`${styles.footerSection}`}>
      <div className={`${styles.footerContainer}`}>
        <div className={`${styles.desktop}`}>
          <img src={logo} className='mb-[0.5rem]' />
          <p className='text-[0.725rem]'>Copyright © 2023 MetaWin </p>
          <p className='text-[0.725rem]'>Patent Pending</p>
        </div>

        <div>
          <h3 className='font-bold mb-[0.6rem]'>About Us</h3>

          <ul>
            <li className='text-[0.825rem] mb-[1rem]'>Privacy Policy</li>
            <li className='text-[0.825rem] mb-[1rem]'>Cookie Policy</li>
            <li className='text-[0.825rem] mb-[1rem]'>Terms and Conditions</li>
          </ul>
        </div>

        <div>
          <h3 className='font-bold mb-[0.6rem]'>Gaming</h3>

          <ul>
            <li className='text-[0.825rem] mb-[1rem]'>
              Underage Gaming Policy
            </li>
            <li className='text-[0.825rem] mb-[1rem]'>
              Self -Exclusion Policy
            </li>
            <li className='text-[0.825rem] mb-[1rem]'>Responsible Gambling</li>
            <li className='text-[0.825rem] mb-[1rem]'>KYC Policy</li>
          </ul>
        </div>

        {/* For Desktop */}
        <div className={`${styles.desktop}`}>
          <h3 className=' font-bold mb-[0.5rem] '>Join Our Web3 community</h3>

          <div className='flex gap-[1rem] mb-[0.5rem]'>
            {socialLinks.map((socialLink) => (
              <img src={socialLink.img} className='cursor-pointer' />
            ))}
          </div>

          <p className={`${styles.text} text-[0.725rem]`}>
            Gaming Activity excluding sweepstakes and blockchain competitions on
            Metawin.com is licensed by Asobi N.V., a company based in Curacao,
            under the gaming license number 365/JAZ issued by the Curacao Gaming
            Control Board, authorized and regulated by the Government of
            Curacao.
          </p>
        </div>

        {/* FOr Mobile */}
        <div className={`${styles.mobile} mt-[3rem]`}>
          <h3 className='font-bold mb-[0.5rem]'>Join Our Web3 community</h3>

          <div className='flex gap-[1rem] mb-[4rem] justify-center'>
            {socialLinks.map((socialLink) => (
              <img src={socialLink.img} className='cursor-pointer' />
            ))}
          </div>

          <div className='mb-[4rem]'>
            <div className=' flex justify-center mb-[0.7rem] '>
              <img src={logo} />
            </div>

            <p>Copyright © 2023 MetaWin </p>
            <p>Patent Pending</p>
          </div>

          <p className='text-[0.725rem] '>
            Gaming Activity excluding sweepstakes and blockchain competitions on
            Metawin.com is licensed by Asobi N.V., a company based in Curacao,
            under the gaming license number 365/JAZ issued by the Curacao Gaming
            Control Board, authorized and regulated by the Government of
            Curacao.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
