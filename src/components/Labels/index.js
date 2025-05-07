import styles from "@/components/Labels/Labels.module.css";

function Labels({ text, htmlFor, hasError }) {
  return (
    <div className={styles.ContainerLabel}>
      <label
        htmlFor={htmlFor}
        className={hasError ? styles.LabelError : styles.Labels}
      >
        {text}
      </label>
    </div>
  );
}

export default Labels;
