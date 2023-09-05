import React from "react";
import styles from "./Ui.module.css";

function TextArea(props) {
  return (
    <div className={`${styles.text_area} ${props.className}`}>
      <label>
        {props.label} <span>*</span>
      </label>
      <textarea
        onChange={props.onChange}
        value={props.value}
        name={props.name}
        placeholder={props.placeholder}
        required
      />
    </div>
  );
}

export default TextArea;
