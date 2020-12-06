import React from "react";
import styles from "../../scss/input.module.scss";
import { useHistory } from "react-router-dom";

const Input = ({ label, type, value, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <label>{label} : </label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
