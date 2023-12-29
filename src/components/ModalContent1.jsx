import React from "react";
import {
  object,
  metaWheelBanner,
  tempBtn,
  modalSpin,
  modalClose,
} from "../assets";
import { NavLink } from "react-router-dom";
import styles from "./Modal.module.css";
import "./ModalContent1.css";

const ModalContent1 = ({ modalHandler }) => {
  return (
    <div className={`${styles.modalContent} w-[30rem] modalContent `}>
      <div className="flex justify-end">
        <img
          src={modalClose}
          onClick={modalHandler}
          className="cursor-pointer"
        />
      </div>

      <div className="flex justify-center">
        {" "}
        <img src={object} className="w-[10rem]" />
      </div>

      <p className="w-[70%] text-center mx-[auto] text-[#fff] text-[0.8rem] bg-[#2F0142] px-[0.7rem] py-[0.5rem] rounded-md text">
        You have exceeded you free spin, Connect wallet to continue
      </p>

      <div className="flex justify-center mb-[1rem]">
        <button className="bg-[#FF6665] text-[#fff] px-[1rem] py-[0.6rem] rounded-md w-[10rem]">
          Deposit
        </button>
      </div>
    </div>
  );
};

export default ModalContent1;
