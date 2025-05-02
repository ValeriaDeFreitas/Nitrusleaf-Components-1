import styles from "@/components/Buttons/Buttons.module.css";
import { useRouter } from "next/router";
import { useState } from "react";


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
        className={`${styles.ButtonFifth}`}
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
function ButtonEsc() {
  const router = useRouter();

  const handleEsc = (e) => {
    e.preventDefault();
    router.push("/escanear");
  };

  return (
    <div className={styles.buttonConteiner}>
      <button
        onClick={handleEsc}
        className={`${styles.button} ${styles.ButtonEsc}`}
      >
        <p className={styles.Scan}>Escanear <br></br> Folha</p>
        <div className={styles.DivImage}>
          <img
            src="/images/Vector_escan.png"
            alt=""
            className={styles.img}
          ></img>
        </div>
      </button>
    </div>
  );
}

/*Botão de upload */
function ButtonUpload() {
  const router = useRouter();

  const handleUpl = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className={styles.buttonConteiner}>
      <button
        onClick={handleUpl}
        className={`${styles.button} ${styles.ButtonUpload}`}
      >
        <p className={styles.Scan}>Fazer <br></br> Upload</p>
      </button>
    </div>
  );
}

/*Botão de drone */
function ButtonDrone() {
  const router = useRouter();

  const handleDrone = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className={styles.buttonConteiner}>
      <button
        onClick={handleDrone}
        className={`${styles.button} ${styles.ButtonDrone}`}
      >
        <p className={styles.Scan}>Drone</p>
        <img
          src="/images/Vector_drone.png"
          alt=""
          className={styles.imgDrone}
        ></img>
      </button>
    </div>
  );
}

/*Botão escaneando */
export default function ButtonEscanear() {
  const router = useRouter();
  const [escaneando, setEscaneando] = useState(false);
  const [validado, setValidado] = useState(false);

  const handleEscanear = (e) => {
    e.preventDefault();

    setEscaneando(true);

    setTimeout(() => {
      setEscaneando(false);
      setValidado(true);

      setTimeout(() => {
        router.push('/');
      }, 2000);
    }, 3000);
  };

  return (
    <div className={styles.ButtonConteiner}>
      <button
        onClick={handleEscanear}
        className={`${styles.button} ${styles.ButtonEscanear}`}
        disabled={validado || escaneando}
      >
        {validado ? (
          <>
            <span>ESCANEADO</span>
            <span>
              <img src="/images/eos-icons_loading.png" alt="ícone" width="20" height="20" />
            </span>
          </>
        ) : escaneando ? (
          <>
            <span>ESCANEANDO</span>
            <span className={styles.loader} />
          </>
        ) : (
          <>
            <span>ESCANEAR</span>
            <span />
          </>
        )}
      </button>
    </div>
  );
}

/*Botão de voltar(variant) */
function ButtonEight() {
  const router = useRouter();

  const handleVoltVar = (e) => {
    e.preventDefault();
    router.push("/excluir");
  };

  return (
    <div className={styles.buttonConteiner}>
      <button
        onClick={handleVoltVar}
        className={`${styles.button} ${styles.ButtonEight}`}
      >
        <img src="/images/Vector.png" alt="" className={styles.imgVolt}></img>
        <p className={styles.volt}>Voltar</p>
      </button>
    </div>
  );
}


export {
  ButtonPrimary,
  ButtonSecondary,
  ButtonThirty,
  ButtonFourth,
  ButtonFifth,
  ButtonSixth,
  ButtonSeventh,
  ButtonEsc,
  ButtonUpload,
  ButtonDrone,
  ButtonEscanear,
  ButtonEight
};
