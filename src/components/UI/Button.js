import React from "react";
import styles from "./Ui.module.css";

function Button(props) {
  return (
    <div
      onClick={props.onClick}
      className={`${styles.button} ${props.className}`}
    >
      <button onClick={props.onClick}>{props.children}</button>
    </div>
  );
}

export default Button;
