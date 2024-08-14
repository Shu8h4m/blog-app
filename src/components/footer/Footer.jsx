import React from "react";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>LAMA</div>
      <div className={styles.text}>
        Lama creative thoughts agency ⓒ All right reserved.
      </div>
    </div>
  );
};

export default Footer;
