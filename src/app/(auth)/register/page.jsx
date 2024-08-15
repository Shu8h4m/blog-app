import { register } from "@/lib/action";
import styles from "./register.module.css";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form} action={register}>
          <input type="text" placeholder="username" name="username" id="" />
          <input type="text" placeholder="email" name="email" id="" />
          <input type="text" placeholder="password" name="password" id="" />
          <input
            type="text"
            placeholder="password again"
            name="passwordRepeat"
            id=""
          />
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
