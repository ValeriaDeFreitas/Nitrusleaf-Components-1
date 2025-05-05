import styles from "@/components/componentsCard/ComponentsCard.module.css"
import { FC } from 'react';

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
  

export {CardPrimary, CardSecondary, CardThirty, CardFourth, CardFifth, CardLeg, CardDiagnostico};
  