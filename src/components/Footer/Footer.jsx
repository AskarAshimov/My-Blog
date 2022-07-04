import React from 'react';
import instagram from  "../../media/icons/free-icon-instagram-145805.png";
import vk from  "../../media/icons/free-icon-vk-145813.png";
import lnkd from "../../media/icons/free-icon-linkedin-145807.png";
import styles from "./Footer.module.css"

const Footer = () => {
  return (
      <footer className="w3-container w3-dark-grey w3-padding-32 w3-margin-top">
        <p className={styles.copy}>Copyright 2022 Bishkek.</p>
        <ul className={styles.socialContainer}>
          <li><img src={instagram} alt=""/></li>
          <li><img src={vk} alt=""/></li>
          <li><img src={lnkd} alt=""/></li>
        </ul>
      </footer>
  );
};

export default Footer;