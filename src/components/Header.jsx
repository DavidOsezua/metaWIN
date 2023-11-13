import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { logo, menu, close, image } from "../assets";
import Button from "./Button";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";

const Header = ({
  toggle,
  toggleHandler,
  collapseHandler,
  children,
  collapseSidebar,
}) => {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();

  return (
    <header
      className={`bg-[#3c0054] ${styles.header} ${
        collapseSidebar && styles.headerCollapse
      } `}
    >
      <nav className={`bg-[#3c0054] ${styles.navContainer}`}>
        <div className={`${styles.menu1LogoContainer}`}>
          <img
            src={menu}
            className={`${styles.menu1}`}
            onClick={collapseHandler}
          />

          <NavLink to="/">
            <img src={logo} className="cursor-pointer " />
          </NavLink>
        </div>

        <div className={`${styles.menu2BtnContainer}`}>
          {isConnected ? (
            <Button text={`${address.slice(0, 4)}...${address.slice(-5)}`} />
          ) : (
            <Button text={`Connect`} clickHandler={open} />
          )}

          <div>
            <img
              src={toggle ? close : menu}
              className={`${styles.menu2} `}
              onClick={toggleHandler}
            />
          </div>
        </div>
      </nav>
      {children}
    </header>
  );
};

export default Header;
