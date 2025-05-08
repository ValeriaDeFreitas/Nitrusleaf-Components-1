import { useRouter } from "next/router";
import { useState } from "react";
import styles from "@/components/Buttons/Buttons.module.css";
import clsx from "clsx";

export default function Button({
  text = "",
  route = "/",
  className = "",         // classe do botão (ex: styles.ButtonUpload)
  imgSrc = null,          // caminho do ícone
  imgClass = "",          // classe da imagem
  textClass = "",         // classe do texto
  customContent = null,   // conteúdo JSX customizado (ex: para loader)
  disabled = false,
  escanear = false,       // modo escaneando com simulação
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    if (escanear) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setDone(true);
        setTimeout(() => {
          router.push(route);
        }, 2000);
      }, 3000);
    } else {
      router.push(route);
    }
  };

  const renderContent = () => {
    if (customContent) return customContent;

    if (escanear) {
      if (done) {
        return (
          <>
            <span>ESCANEADO</span>
            <img src="/images/eos-icons_loading.png" alt="check" width="20" height="20" />
          </>
        );
      }
      if (loading) {
        return (
          <>
            <span>ESCANEANDO</span>
            <span className={styles.loader} />
          </>
        );
      }
      return <span>ESCANEAR</span>;
    }

    return (
      <>
        {imgSrc && <img src={imgSrc} alt="ícone" className={imgClass} />}
        <p className={textClass}>{text}</p>
      </>
    );
  };

  return (
    <div className={styles.ButtonConteiner}>
      <button
        onClick={handleClick}
        disabled={disabled || (escanear && (loading || done))}
        className={clsx(styles.button, className)}
      >
        {renderContent()}
      </button>
    </div>
  );
}
