import React, { useState } from "react";
import {
  object,
  metaWheelBanner,
  tempBtn,
  modalSpin,
  modalClose,
} from "../assets";

import { Zoom } from "react-awesome-reveal";
import styles from "./Modal.module.css";

const Modal = ({ children }) => {
  return (
    <div className={styles.overlay}>
      <Zoom>{children}</Zoom>
    </div>
  );
};

export default Modal;
