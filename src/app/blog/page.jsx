import React from "react";
import styles from "./blog.module.css";
import PostCard from "@/components/postCard/postCard";
import next from "next";
import { getPosts } from "@/lib/data";

export const metadata = {
  title: "Posts Page",
  description: "Blog Page",
};
//BlogCH DATA FROM API
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

const BlogPage = async () => {
  // WITH API
  const posts = await getData();
  //WITHOUT API
  // const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post._id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
