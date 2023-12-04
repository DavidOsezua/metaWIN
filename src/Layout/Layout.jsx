import React, { useState, useEffect } from 'react';
import styles from './Layout.module.css';
import Modal from '../components/Modal';
import { Sidebar1, Sidebar2, Footer, Header } from '../components'; // These imports are coming from the index.js file in the component folder. This method minimizes the number of import used in a particular component

/* This Layout Component renders the header and the sidebar component. It also accept a children prop which is encapsulated inside the sidebar and header component. The Layout component is then exported and rendered in the App component where all the component routes are encapsulated inside the Layout component.  */

const Layout = ({ children }) => {
  const [toggle, setToggle] = useState(false); // This state handles the toogle button of the sidebar for the desktop and drop down menu for the mobile

  const [collapseSidebar, setCollapseSidebar] = useState(false); // This state handles the closing of the sidebar for the desktop view.

  const toggleHandler = () => {
    setToggle((prev) => !prev); //This function sets the toggle to true and false
  };

  const collapseHandler = () => {
    setCollapseSidebar((prev) => !prev); //This function sets the closing of the sidebar to true and false
  };

  const [modal, setModal] = useState(false);
  const modalHandler = () => {
    setModal(!modal);
  };

  useEffect(() => {
    setModal(true);
  }, []);

  return (
    <>
      {modal && <Modal modalHandler={modalHandler} />}
      {/********** HEADER COMPONENT  **********/}
      <Header
        toggle={toggle}
        toggleHandler={toggleHandler}
        collapseHandler={collapseHandler}
        collapseSidebar={collapseSidebar}
      />

      {/********** CONTAINER  **********/}
      <div className={`${styles.container}`}>
        {/********** SIDEBAR COMPONENT  **********/}

        <Sidebar2
          toggle={toggle}
          collapseSidebar={collapseSidebar}
          toggleHandler={toggleHandler}
        />

        <div
          className={`${styles.check} ${collapseSidebar && styles.collapse} `}
        >
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
