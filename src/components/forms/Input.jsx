import React from 'react';
import styles from './Input.module.css';
const Input = ({ type, value, setValue, label, id }) => {
  function handleChange({ target }) {
    setValue(target.value);
  }
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id}>{label}</label>
      <input type={type} value={value} onChange={handleChange} id={id} />
      <p className={styles.error}>Error</p>
    </div>
  );
};

export default Input;
