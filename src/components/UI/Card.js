import React from "react";
import styles from "./Ui.module.css";

function Card(props) {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
}

export default Card;
