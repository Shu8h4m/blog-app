import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// FETCH DATA WITH API
// const getPost = async (id) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   if (!res.ok) {
//     throw new Error("Cannot get the post");
//   }
//   return res.json();
// };

const SinglePagePost = async ({ params }) => {
  //FETCH DATA FROM API
  // const post = await getPost(parseInt(params.slug));

  //WITHOUT API
  const post = await getPost(params.slug);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/27496512/pexels-photo-27496512/free-photo-of-a-cup-of-coffee-on-top-of-a-grassy-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.details}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/16879010/pexels-photo-16879010/free-photo-of-little-girl-in-traditional-clothing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={50}
            height={50}
          />
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>

        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default SinglePagePost;
