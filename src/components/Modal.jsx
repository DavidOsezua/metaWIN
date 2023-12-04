import React, { useState } from 'react';
import {
  object,
  metaWheelBanner,
  tempBtn,
  modalSpin,
  modalClose,
} from '../assets';
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
          <button></button>
          <img src={tempBtn} />
        </div>
      </Zoom>
    </div>
  );
};

export default Modal;

// const App = () => {
//   const [modalVisible, setModalVisible] = useState(false);

//   // useEffect to show the modal when the component mounts
//   useEffect(() => {
//     setModalVisible(true);
//   }, []); // The empty dependency array ensures that the effect runs only once

//   return (
//     <div className="app">
//       {modalVisible && <Modal />}
//       <div className="content">
//         {/* The rest of your app content */}
//         <p>Main content goes here.</p>
//       </div>
//     </div>
//   );
// };

// export default App;
