import styles from "@/components/componentsForm/ComponentsForm.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

/* Inputs Form (Grande)*/
function InputsText() {
  return (
    <div className={styles.inputCardBody}>
      <form className="formPrimary">
        <div className={styles.inputCard}>
          <input type="text" className={styles.inputPrimary} />
        </div>
      </form>
    </div>
  );
}

function InputsPassword() {
  return (
    <div className={styles.inputCardBody}>
      <form className="formPrimary">
        <div className={styles.inputCard}>
          <input type="password" className={styles.inputPrimary} />
        </div>
      </form>
    </div>
  );
}

function InputsEmail() {
  return (
    <div className={styles.inputCardBody}>
      <form className="formPrimary">
        <div className={styles.inputCard}>
          <input type="email" className={styles.inputPrimary} />
        </div>
      </form>
    </div>
  );
}

function InputsNumber() {
  return (
    <div className={styles.inputCardBody}>
      <form className="formPrimary">
        <div className={styles.inputCard}>
          <input type="number" className={styles.inputPrimary} />
        </div>
      </form>
    </div>
  );
}
/* Inputs Form (Média)*/

function InputsTextSecondary() {
  return (
    <div className={styles.inputCardBody}>
      <form className="formPrimary">
        <div className={styles.inputCard}>
          <input type="number" className={styles.inputsSecondary} />
        </div>
      </form>
    </div>
  );
}

function InputsNumberSecondary() {
  return (
    <div className={styles.inputCardBody}>
      <form className="formPrimary">
        <div className={styles.inputCard}>
          <input type="number" className={styles.inputsSecondary} />
        </div>
      </form>
    </div>
  );
}


/* Inputs Form (DropBox)*/

function InputDropBox() {
  return (
    <div className={styles.inputCardBody}>
      <form className="formPrimary">
        <div className={styles.inputCard}>
          <label className={styles.selectLabel}>text</label>
          <select className={styles.customSelect}>
            <option value="">Selecione</option>
            <option value="fisica">Pessoa Física</option>
            <option value="juridica">Pessoa Jurídica</option>
          </select>
        </div>
      </form>
    </div>
  );
}

/* Inputs Form (Pequena)*/

function InputsTextThirdy() {
  return (
    <div className={styles.inputCardBody}>
      <form className="formPrimary">
        <div className={styles.inputCard}>
          <input type="number" className={styles.inputsThirdy} />
        </div>
      </form>
    </div>
  );
}

function InputsNumberThirdy() {
  return (
    <div className={styles.inputCardBody}>
      <form className="formPrimary">
        <div className={styles.inputCard}>
          <input type="number" className={styles.inputsThirdy} />
        </div>
      </form>
    </div>
  );
}
/**/ 

function InputsTextFourth() {
  return (
    <div className={styles.inputCardBody}>
      <form className="formPrimary">
        <div className={styles.inputCard}>
          <input type="number" className={styles.inputsFourth} />
        </div>
      </form>
    </div>
  );
}

function InputsNumberFourth() {
  return (
    <div className={styles.inputCardBody}>
      <form className="formPrimary">
        <div className={styles.inputCard}>
          <input type="number" className={styles.inputsFourth} />
        </div>
      </form>
    </div>
  );
}


/**/ 

function InputsTextFifth() {
  return (
    <div className={styles.inputCardBody}>
      <form className="formPrimary">
        <div className={styles.inputCard}>
          <input type="number" className={styles.inputsFifth} />
        </div>
      </form>
    </div>
  );
}

function InputsNumberFifth() {
  return (
    <div className={styles.inputCardBody}>
      <form className="formPrimary">
        <div className={styles.inputCard}>
          <input type="number" className={styles.inputsFifth} />
        </div>
      </form>
    </div>
  );
}


/**/ 

function InputsTextSixth() {
  return (
    <div className={styles.inputCardBody}>
      <form className="formPrimary">
        <div className={styles.inputCard}>
          <input type="number" className={styles.inputsSixth} />
        </div>
      </form>
    </div>
  );
}

function InputsNumberSixth() {
  return (
    <div className={styles.inputCardBody}>
      <form className="formPrimary">
        <div className={styles.inputCard}>
          <input type="number" className={styles.inputsSixth} />
        </div>
      </form>
    </div>
  );
}

/**/ 
function InputsTextSeventh() {
  return (
    <div className={styles.inputCardBody}>
      <form className="formPrimary">
        <div className={styles.inputCard}>
          <input type="number" className={styles.inputsSeventh} />
        </div>
      </form>
    </div>
  );
}

function InputsNumberSeventh() {
  return (
    <div className={styles.inputCardBody}>
      <form className="formPrimary">
        <div className={styles.inputCard}>
          <input type="number" className={styles.inputsSeventh} />
        </div>
      </form>
    </div>
  );
}


/**/ 
function InputsTextEighth() {
  return (
    <div className={styles.inputCardBody}>
      <form className="formPrimary">
        <div className={styles.inputCard}>
          <input type="number" className={styles.inputsEighth} />
        </div>
      </form>
    </div>
  );
}

function InputsNumberEighth() {
  return (
    <div className={styles.inputCardBody}>
      <form className="formPrimary">
        <div className={styles.inputCard}>
          <input type="number" className={styles.inputsEighth} />
        </div>
      </form>
    </div>
  );
}

/**/ 
function InputsTextNinth() {
  return (
    <div className={styles.inputCardBody}>
      <form className="formPrimary">
        <div className={styles.inputCard}>
          <input type="number" className={styles.inputsNinth} />
        </div>
      </form>
    </div>
  );
}

function InputsNumberNinth() {
  return (
    <div className={styles.inputCardBody}>
      <form className="formPrimary">
        <div className={styles.inputCard}>
          <input type="number" className={styles.inputsNinth} />
        </div>
      </form>
    </div>
  );
}

function RadioButtonGroup() {
  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className={styles.radioConteiner}>
      <h3 className={styles.Text}>text</h3>
      <div className={styles.radioGroup}>
        <label className={styles.radioItem}>
          <input
            type="radio"
            value="option1"
            checked={selected === "option1"}
            onChange={handleChange}
          />
          Opção 1
        </label>

        <label className={styles.radioItem}>
          <input
            type="radio"
            value="option2"
            checked={selected === "option2"}
            onChange={handleChange}
          />
          Opção 2
        </label>
      </div>
    </div>
  );
}


export {
  InputsText,
  InputsPassword,
  InputsEmail,
  InputsNumber,
  InputsNumberSecondary,
  InputsTextSecondary,
  InputsNumberThirdy,
  InputsTextFourth,
  InputsTextFifth,
  InputsNumberFifth,
  InputsTextThirdy,
  RadioButtonGroup,
  InputsNumberFourth,
  InputDropBox,
  InputsNumberNinth,
  InputsTextNinth,
  InputsTextEighth,
  InputsNumberEighth,
  InputsTextSeventh,
  InputsNumberSixth,
  InputsTextSixth,
  InputsNumberSeventh
};
