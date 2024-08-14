import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";

// FETCH DATA WITH API
const getPost = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  if (!res.ok) {
    throw new Error("Cannot get the post");
  }
  return res.json();
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return { title: post.title, description: post.desc };
};

const SinglePagePost = async ({ params }) => {
  //FETCH DATA FROM API
  const post = await getPost(params.slug);

  //WITHOUT API
  // const post = await getPost(params.slug);
  console.log(post.createdAt.toString().slice(0, 10));
  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>

        <div className={styles.details}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(0, 10)}
            </span>
          </div>
        </div>

        {post && <div className={styles.content}>{post.desc}</div>}
      </div>
    </div>
  );
};

export default SinglePagePost;
