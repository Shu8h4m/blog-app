"use server";
import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";

export const addPost = async (formdata) => {
  //   const title = formdata.get("title");
  //   const desc = formdata.get("desc");
  //   const slug = formdata.get("slug");
  //   const userId = formdata.get("userId");

  const { title, desc, slug, userId } = Object.fromEntries(formdata);
  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog");
    revalidatePath("/serverActionTest");
  } catch (error) {
    console.log(error);
    return { err: "something went wrong" };
  }
};

export const deletePost = async (formdata) => {
  const { postId } = Object.fromEntries(formdata);

  try {
    connectToDb();
    await Post.findByIdAndDelete(postId);
    console.log("Post deleted");
    revalidatePath("/blog");
    revalidatePath("/serverActionTest");
  } catch (error) {
    console.log(error);
    return { err: "some thing went wrong" };
  }
};
