import styles from "@/components/Buttons/Buttons.module.css"
import { useRouter } from 'next/router';

/*Botão de Propriedade */
function ButtonPrimary() {
  const router = useRouter();

  const handleProp = (e) => {
    e.preventDefault();
    router.push("/propriedade");
  };

  return (
    <div className={styles.buttonConteiner}>
      <button
        onClick={handleProp}
        className={`${styles.button} ${styles.Button}`}
      >
        text
      </button>
    </div>
  );
}

/*Botão de Próximo */
function ButtonSecondary() {
  const router = useRouter();

  const handleProx = (e) => {
    e.preventDefault();
    router.push("/proximo");
  };

  return (
    <div className={styles.buttonConteiner}>
      <button
        onClick={handleProx}
        className={`${styles.button} ${styles.ButtonSecondary}`}
      >
        text
      </button>
    </div>
  );
}

/*Botão de Finalizar */
function ButtonThirty() {
  const router = useRouter();

  const handleFin = (e) => {
    e.preventDefault();
    router.push("/finalizar");
  };

  return (
    <div className={styles.buttonConteiner}>
      <button
        onClick={handleFin}
        className={`${styles.button} ${styles.ButtonThirty}`}
      >
        text
      </button>
    </div>
  );
}

/*Botão de Perfil */
function ButtonFourth() {
  const router = useRouter();

  const handlePerfil = (e) => {
    e.preventDefault();
    router.push("/perfil");
  };

  return (
    <div className={styles.buttonConteiner}>
      <button
        onClick={handlePerfil}
        className={`${styles.button} ${styles.ButtonFourth}`}
      >
        text
      </button>
    </div>
  );
}

/*Botão de Excluir */
function ButtonFifth() {
  const router = useRouter();

  const handleExc = (e) => {
    e.preventDefault();
    router.push("/excluir");
  };

  return (
    <div className={styles.buttonConteiner}>
      <button
        onClick={handleExc}
        className={`${styles.button} ${styles.ButtonFifth}`}
      >
        text
      </button>
    </div>
  );
}

/*Botão de Editar */
function ButtonSixth() {
  const router = useRouter();

  const handleEdt = (e) => {
    e.preventDefault();
    router.push("/excluir");
  };

  return (
    <div className={styles.buttonConteiner}>
      <button
        onClick={handleEdt}
        className={`${styles.button} ${styles.ButtonSixth}`}
      >
        text
      </button>
    </div>
  );
}

/*Botão de voltar */
function ButtonSeventh() {
  const router = useRouter();

  const handleVolt = (e) => {
    e.preventDefault();
    router.push("/excluir");
  };

  return (
    <div className={styles.buttonConteiner}>
      <button
        onClick={handleVolt}
        className={`${styles.button} ${styles.ButtonSeventh}`}
      >
        <img src="/images/Vector.png" alt=""></img>
      </button>
    </div>
  );
}

/*Botão de escanear */
function ButtonEight() {
  const router = useRouter();

  const handleEsc = (e) => {
    e.preventDefault();
    router.push("/escanear");
  };

  return (
    <div className={styles.buttonConteiner}>
      <button
        onClick={handleEsc}
        className={`${styles.button} ${styles.ButtonEight}`}
      >
        <p className={styles.Scan}>escanear Folha</p>
        <img src="/images/Vector_escan.png" alt=""></img>
      </button>
    </div>
  );
}



export {ButtonPrimary, ButtonSecondary, ButtonThirty, ButtonFourth, ButtonFifth, ButtonSixth, ButtonSeventh, ButtonEight};
