import styles from "@/components/Footer/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerWave}>
      <svg
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        className={styles.footerSvg}
      >
        <defs>
          <linearGradient id="gradient" x1="0" x2="1" y1="1" y2="0">
            <stop offset="0%" stopColor="#e67e22" />
            <stop offset="100%" stopColor="#fbc02d" />
          </linearGradient>
        </defs>
        <path
          d="M0,0 C300,150 900,-50 1200,100 L1200,200 L0,200 Z"
          fill="url(#gradient)"
        />
      </svg>
    </footer>
  );
};

export { Footer };
