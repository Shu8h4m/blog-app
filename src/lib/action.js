"use server";
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

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

export const handleGithubLogin = async () => {
  "use server";

  await signIn("github");
};

export const handleLogout = async () => {
  "use server";

  await signOut();
};

export const register = async (formdata) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formdata);

  if (password !== passwordRepeat) {
    return { error: "password do not match" };
  }

  try {
    connectToDb();
    const user = await User.findOne({ username });

    if (user) {
      return "usernmae already exists";
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log("Saved to db");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { err: "Something went wrong" };
  }
};

export const login = async (formdata) => {
  const { username, password } = Object.fromEntries(formdata);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error);
    return { err: "Something went wrong" };
  }
};
