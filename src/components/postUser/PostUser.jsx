import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";
import Image from "next/image";
//FETCH DATA FROM API
// const getUser = async (id) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Something is wrong");
//   }
//   return res.json();
// };

const PostUser = async ({ userId }) => {
  //FETCH DATA FROM API
  //   const user = await getUser(userId);

  //WITHOUT API
  const user = await getUser(userId);
  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={user.img ? user.img : "/noAvatar.png"}
        width={50}
        height={50}
      />
      <div className={styles.textContainer}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
