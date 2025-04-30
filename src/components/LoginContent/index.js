import styles from "@/components/LoginContent/LoginContent.module.css";
import { useRouter } from "next/router";

const LoginContent = () => {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // Futuramente aqui irá a validação, autenticação, etc.
    router.push("/home");
  };

  return (
    <div className={styles.loginContent}>
      {/* LOGIN CARD */}
      <div className={styles.loginCard}>
        {/* LOGIN CARD BODY */}
        <div className={styles.loginCardBody}>
          <form className="formPrimary" onSubmit={handleLogin}>
            <div className={styles.loginContent}>
              <div className={styles.loginCard}>
                <h1 className={styles.loginTitle}>Login</h1>
                <input
                  type="text"
                  className={styles.inputPrimary}
                />
                <input
                  type="password"
                  className={styles.inputPrimary}
                />
                <button className={styles.btnPrimary}>Login</button>
                <a href="#" className={`${styles.link} ${styles.loginLinks}`}>
                  Esqueci a senha
                </a>
                <p className={styles.loginLinks}>
                  Não possui uma conta?
                  <a href="#" className={`${styles.link} ${styles.loginLinks}`}>
                    Fazer cadastro
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginContent;
