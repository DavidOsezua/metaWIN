import { useState, useRef, useEffect } from "react";
import styles from "./Wheel.module.css";
import Table from "../components/Table";
import { HeaderEmpty, SwitchButton, SpinWheel } from "../components";
import { ethAmt, numberOfSpins, potentialWins } from "../Data/data";
import { spinIcon } from "../assets";
import { toast } from "react-toastify";
import { getWalletClient, getPublicClient } from "@wagmi/core";

import "../App.css";
import { parseEther } from "viem";
import { mainChain } from "../Data/chain";
import { axiosInstance } from "../axios";

const multipliers = {
  low: 10,
  medium: 15,
  high: 30,
};

const _to = "0x547C21A8a356De80a9D96eD0574eC0c15Fdc2EEb";

const Wheel = () => {
  const wheelRef = useRef();
  const [amount, setAmount] = useState(100);
  const [active, setActive] = useState("low");
  const [etherPrice, setEtherPrice] = useState(1);
  const [etherAmt, setEtherAmt] = useState(0);
  const publicClient = getPublicClient({ chainId: mainChain.id });

  useEffect(() => {
    setEtherAmt(amount / etherPrice);
  }, [amount, etherPrice]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
    ).then((res) =>
      res.json().then((data) => {
        const price = data["ethereum"]["usd"];
        setEtherPrice(price);
      })
    );
  }, []);

  const makeSpin = () => {
    if (wheelRef.current) {
      let randomDeg = 360 * multipliers[active];
      console.log(randomDeg);
      const mod = randomDeg % 360;
      randomDeg = randomDeg - (mod % (360 / 8));
      wheelRef.current.style.transition = "all 3s ";
      wheelRef.current.style.transform = `rotate(${randomDeg}deg)`;
    }
  };

  const startRotation = async () => {
    const signer = await getWalletClient({ chainId: mainChain.id });

    if (!signer) {
      toast.warn("Please connect your wallet");
      return;
    }

    const ethAmtWei = parseEther(etherAmt.toString());

    const balance = await publicClient.getBalance({
      address: signer.account.address,
    });

    if (balance < ethAmtWei) {
      toast.warn("Insufficient Balance");
      return;
    }

    const tx = {
      value: ethAmtWei,
      to: _to,
    };
    try {
      const data = {
        amount: etherAmt,
        user: signer.account.address,
      };

      const hash = await signer.sendTransaction(tx);
      const res = await axiosInstance.post("/wager", data);
      console.log(res);
      // console.log(hash)
      // await publicClient.waitForTransactionReceipt({ hash });
      makeSpin();
    } catch (e) {
      toast.error("Error spinning wheel");
      console.log(e);
      return;
    }
  };

  const amountHandler = (value) => {
    setAmount(value);
  };

  const activeHandler = (spinValue) => {
    console.log(spinValue);
    setActive(spinValue);
  };
  return (
    <section className={`${styles.section} transition`}>
      <HeaderEmpty />

      <div className={`${styles.container}`}>
        {/* **************** CONTAINER ******************** */}
        <div className={`flex ${styles.top}`}>
          {/* **************** INFO SECTION******************** */}
          <div
            className={`bg-[#560378] p-[1rem] text-[#fff] text-[0.7rem] ${styles.infoContainer}`}
          >
            <div>
              {/* **************** AMOUNT LABEL ******************** */}
              <div className="flex justify-between items-center pb-[0.9rem]">
                <p>Amount:</p>
                <p>{etherAmt.toFixed(3)} ETH</p>
              </div>
              {/* **************** AMOUNT SELECTION ******************** */}
              <div
                className={`flex gap-[1rem] justify-between bg-[#3C0054] px-[1.5rem] py-[0.6rem] rounded-md text-[0.9rem] items-center `}
              >
                <p>{`$${amount}`}</p>

                <div className="flex gap-[1rem]">
                  {ethAmt.map((x, index) => (
                    <button
                      key={index}
                      onClick={() => amountHandler(x)}
                      className={` ${styles.amtBtn} ${
                        amount === x ? styles.active : ""
                      }`}
                    >
                      {x}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* **************** POTENTIAL WINS ******************** */}
            <div>
              <p className="pb-[0.9rem]">potential Wins</p>
              <div className="flex  justify-between gap-[0.8rem]">
                {potentialWins.map((potentialWin, index) => (
                  <p
                    className="bg-[#3C0054] w-[7rem] text-center py-[0.5rem] text-[0.9rem] rounded-md"
                    key={index}
                  >
                    {potentialWin}
                  </p>
                ))}
              </div>
            </div>

            {/* **************** NUMBER OF SPINS ******************** */}
            <div>
              <p>Numbers of spins</p>
              <div className="flex gap-[0.9rem] justify-between bg-[#3C0054] py-[0.7rem] px-[1rem] rounded-md text-[0.9rem] text-[#CACACA]">
                {numberOfSpins.map((spin, index) => (
                  <span
                    key={index}
                    onClick={() => activeHandler(spin)}
                    className={`${
                      active === spin ? styles.active : ""
                    } cursor-pointer `}
                  >
                    {spin.slice(0, 1).toUpperCase() + spin.slice(1)}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={startRotation}
              className="flex items-center text-[0.9rem] gap-[0.5rem] bg-[#FF6665] w-full py-[1rem] justify-center rounded-md "
            >
              Spin <img src={spinIcon} className="circle" />
            </button>
          </div>

          {/* **************** WHEEL SECTION ******************** */}
          <div className={` ${styles.wheelContainer}  bg-[#3C0054]`}>
            <p className="text-center bg-[#4C026A] py-[0.7rem] text-[#CACACA]">
              Spin the Wheel
            </p>

            <div className="pb-[4rem] relative">
              <div>
                <SpinWheel wheelRef={wheelRef} />
              </div>
            </div>
          </div>
        </div>
        {/* **************** TABLE FOR LEADER AND LATEST WINS ******************** */}
        <SwitchButton
          text1={`Leader Board`}
          text2={`Latest Win`}
          className={`w-[15rem] px-[0.6rem]`}
          component={<Table />}
          component2={<Table />}
        />
      </div>
    </section>
  );
};

export default Wheel;
