import styles from "@/components/componentsForm/ComponentsForm.module.css";

function InputField({ type = "text", variant = "Primary", label, ...props }) {
  const inputClass = styles[`input${variant}`] || styles.inputPrimary;
  return (
    <div className={styles.inputContent}>
      <form className="formPrimary">
        <div className={styles.inputCard}>
          {label && <label className={styles.selectLabel}>{label}</label>}
          <input type={type} className={inputClass} {...props} />
        </div>
      </form>
    </div>
  );
}

function SelectField({ label, options = [], variant = "Primary", ...props }) {
  const selectClass = styles.customSelect;

  return (
    <div className={styles.inputContent}>
      <form className="formPrimary">
        <div className={styles.inputCard}>
          {label && <label className={styles.selectLabel}>{label}</label>}
          <select className={selectClass} {...props}>
            <option value="">Selecione</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}


export {InputField, SelectField };