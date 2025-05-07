import styles from "@/components/componentsCard/ComponentsCard.module.css"

function CardPrimary() {
    return (
      <div className={styles.CardPrimary}>
        <div className={styles.CardInternoPrimary}></div>
      </div>
    );
  }

function CardSecondary() {
    return (
      <div className={styles.CardSecondary}>
        <div className={styles.CardInternoSecondary}></div>
      </div>
    );
  }

  function CardThirty() {
    return (
      <div className={styles.CardThirty}>
        <div className={styles.CardInternoThirty}></div>
      </div>
    );
  }

  function CardFourth() {
    return (
      <div className={styles.CardFourth}>
        <div className={styles.CardInternoFourth}></div>
      </div>
    );
  }

  function CardFifth() {
    return (
      <div className={styles.CardFifth}>
        <div className={styles.CardInternoFifth}></div>
      </div>
    );
  }

  function CardLeg() {
    return (
      <div className={styles.CardLeg}>
      </div>
    );
  }

  function CardDiagnostico() {
    return (
      <div className={styles.CardDiagnostico}>
      </div>
    );
  }

  const CardScrollPrimary = ({ title, content }) => {
    return (
      <div className={styles.CardScrollPrimary}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    );
  };
  
  function CardScrollSecondary({ title, status, percentage }) {
    const strokeDash = `${(percentage / 100) * 113}, 113`;
    return (
      <div className={styles.CardScrollSecondary}>
        <div>
          <h3 className={styles.CardTitle}>{title}</h3>
          <div className={styles.StatusContainer}>
            <span className={styles.StatusDot} />
            <span className={styles.StatusText}>{status}</span>
          </div>
        </div>
  
        <div className={styles.Actions}>
          <span className={styles.ViewLabel}>Ver</span>
  
          <div className={styles.ProgressContainer}>
            <svg className={styles.ProgressSvg} width="40" height="40">
              <circle
                cx="20"
                cy="20"
                r="18"
                stroke="#e5e7eb"
                strokeWidth="4"
                fill="none"
              />
              <circle
                cx="20"
                cy="20"
                r="18"
                stroke="red"
                strokeWidth="4"
                fill="none"
                strokeDasharray={strokeDash}
                transform="rotate(-90 20 20)"
              />
            </svg>
            <div className={styles.ProgressText}>{percentage}%</div>
          </div>
  
          <button className={styles.ReportButton}>Relatórios &gt;</button>
        </div>
      </div>
    );
  }
    



export {CardPrimary, CardSecondary, CardThirty, CardFourth, CardFifth, CardLeg, CardDiagnostico, CardScrollPrimary, CardScrollSecondary};
  