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
  return (
    <div className="flex justify-between items-center p-4 rounded-lg border border-green-600 bg-neutral-50 shadow-sm">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex items-center gap-2 mt-2">
          <span className="h-3 w-5 rounded-full bg-orange-500 inline-block" />
          <span className="text-sm">{status}</span>
        </div>
      </div>

      <div className="flex flex-col items-end justify-between h-full">
        <span className="text-sm text-gray-400">Ver</span>

        <div className="relative w-10 h-10 mt-2">
          <svg className="absolute top-0 left-0" width="40" height="40">
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
              strokeDasharray={`${(percentage / 100) * 113}, 113`}
              transform="rotate(-90 20 20)"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-sm font-bold">
            {percentage}%
          </div>
        </div>
        <button className="text-sm font-semibold mt-2">Relatórios &gt;</button>
      </div>
    </div>
  );
}



export {CardPrimary, CardSecondary, CardThirty, CardFourth, CardFifth, CardLeg, CardDiagnostico, CardScrollPrimary, CardScrollSecondary};
  