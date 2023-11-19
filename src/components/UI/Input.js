import React from "react";
import styles from "./Ui.module.css";

function Input(props) {
  return (
    <div className={`${styles.input} ${props.className}`}>
      <label>
        {props.label} <span>*</span>
      </label>
      <input
        className={props.invalid ? `${styles.invalidInput}` : ""}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        required
      />
    </div>
  );
}

export default Input;
