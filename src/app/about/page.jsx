import Image from "next/image";
import React from "react";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About Page",
};
const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>About Agency</h2>
        <h1 className={styles.about}>
          We create digital ideas that are bigger, bloder,braver and better.
        </h1>
        <p className={styles.desc}>
          Welcome to DS Tech, a flagship web development and digital marketing
          solution brought to you by ThinkWebhub Pvt. Ltd. We are passionate
          about helping businesses thrive in the digital era, and DS Tech is the
          culmination of our dedication to empowering your online success.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of Experience</p>
          </div>
          <div className={styles.box}>
            <h1>234 K+</h1>
            <p>People reached</p>
          </div>
          <div className={styles.box}>
            <h1>5 K+</h1>
            <p>Services and plugins</p>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/about.png" fill className={styles.imge} />
      </div>
    </div>
  );
};

export default AboutPage;
