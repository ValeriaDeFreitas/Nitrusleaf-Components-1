import styles from '@/components/initialPage/initialPage.module.css'
import { useRouter } from "next/router";

const MenuButtons = () => {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    router.push("/login");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    router.push("/register");
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    // Aqui entraria a lógica de autenticação com o Google futuramente
    console.log("Login com Google");
  };

  return (
    <div className={styles.menuButtons}>
      <button onClick={handleLogin} className={`${styles.input} ${styles.btnPrimary}`}>
        Login
      </button>
      <button onClick={handleRegister} className={`${styles.input} ${styles.btnSecondary}`}>
        Cadastrar-se
      </button>

      <div className={styles.separator}>
        <span>ou</span>
      </div>

      <button onClick={handleGoogleLogin} className={`${styles.input} ${styles.btnGoogle}`}>
      <img src="/images/google-icon.png" alt="Google" className={styles.googleIcon} />
        Logar com o Google
      </button>
    </div>
  );
};

export default MenuButtons;
