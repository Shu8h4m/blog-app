import { addPost, deletePost } from "@/lib/action";

const ServerAction = () => {
  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="desc" name="desc" />
        <input type="text" placeholder="slug" name="slug" />
        <input type="text" placeholder="userId" name="userId" />
        <button>add Post</button>
      </form>
      <form action={deletePost}>
        <input type="text" placeholder="post Id" name="postId" />
        <button>dlt Post</button>
      </form>
    </div>
  );
};

export default ServerAction;
