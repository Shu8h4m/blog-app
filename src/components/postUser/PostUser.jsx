import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";
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
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{user.username}</span>
    </div>
  );
};

export default PostUser;
