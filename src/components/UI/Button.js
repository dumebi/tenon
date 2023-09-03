import React from "react";
import styles from "./Ui.module.css";

function Button(props) {
  return (
    <div className={styles.button}>
      <button>{props.children}</button>
    </div>
  );
}

export default Button;
