import Image from "next/image";
import styles from "./postcard.module.css";
import Link from "next/link";
const PostCard = ({ post }) => {
  return (
    <div className={styles.containerr}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/16879010/pexels-photo-16879010/free-photo-of-little-girl-in-traditional-clothing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
