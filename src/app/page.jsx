import Image from "next/image";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae
          inventore aliquid, beatae ipsam dolorem natus ab ducimus reiciendis
          autem quos quaerat blanditiis porro tempore earum recusandae tenetur,
          maxime dolores?
        </p>

        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/hero.gif" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
