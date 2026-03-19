import React from 'react';
import styles from './Input.module.css';
const Input = ({
  type,
  value,
  onChange,
  onBlur,
  label,
  id,
  error,
  placeholder,
}) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id}>{label}</label>
      <input
        onBlur={onBlur}
        type={type}
        value={value}
        onChange={onChange}
        id={id}
        placeholder={placeholder}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
